import { logEvent } from "firebase/analytics";
import {
  browserLocalPersistence,
  setPersistence,
  signInWithPhoneNumber
} from "firebase/auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import { getGoogleAnalytics } from "../../app/firebaseClient";
import { graphqlClient } from "../../app/api"

function PhoneNumberVerification({ recaptcha, auth, phoneNumber, setPhoneNumber }) {
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [code, setCode] = useState("");
  const createUser = useMutation(
    "createUser",
    async (uid) => {
      return await graphqlClient.request(
        gql`
          mutation createUser($uid: String!) {
            createUser(input: { uid: $uid }) {
              user {
                id
              }
            }
          }
        `,
        { uid }
      );
    },
    {
      onSuccess: () => {
        console.log("success");
      },
      onError: () => {
        console.log("failure");
      },
    }
  ); // TODO: I don't want this here 
  const router = useRouter();

  useEffect(() => {
    recaptcha.verify();
  }, [recaptcha]);

  const signIn = async () => {
    await setPersistence(auth, browserLocalPersistence);
    setConfirmationResult(
      await signInWithPhoneNumber(auth, phoneNumber, recaptcha)
    );
  };

  const verifyCode = async () => {
    await confirmationResult
      .confirm(code)
      .then((result) => {
        createUser.mutate(result.user.uid);
        router.push("/");
      })
      .catch((error) => {
        console.log(error);
        recaptcha.reset(window.recaptchaWidgetId);
      });
  };

  return (
    <>
      <div className="flex flex-row dark:text-black">
        <PhoneInput
          country={"us"}
          containerStyle={{ width: "auto" }}
          inputStyle={{ width: "auto", height: "100%" }}
          value={phoneNumber}
          onChange={(phone) => {
            setPhoneNumber(`+${phone}`);
          }}
        />
        <label
          htmlFor="my-modal-6"
          className="btn modal-button ml-2"
          onClick={signIn}
          disabled={!phoneNumber}
        >
          &#x2192;
        </label>
      </div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <input
            type="text"
            value={code}
            placeholder="XXXXXX"
            className="input input-bordered w-full max-w-xs"
            onChange={(e) => setCode(e.target.value)}
          />
          <div className="modal-action">
            <label
              htmlFor="my-modal-6"
              className="btn"
              onClick={verifyCode}
              disabled={code.length != 6}
            >
              &#x2192;
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default PhoneNumberVerification;
