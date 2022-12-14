import Link from "next/link";

function Navbar() {
  // const { user, isLoading } = useUser();

  return (
    <div className="navbar">
      <div className="flex-1">
        <a href="https://about.everything.dev">
          <button className="btn btn-ghost">
            <div className="flex flex-col text-right">
              <h1 className="normal-case text-4xl">everything</h1>
              <p className="text-sm justify-end">MARKETPLACE</p>
            </div>
          </button>
        </a>
      </div>
      {/* <div className="flex-none mt-2 mr-2">
        <div className="dropdown dropdown-end">
          <label tabIndex="0" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">8</span>
            </div>
          </label>
          <div
            tabIndex="0"
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        {user ? (
          <>
            <div className="dropdown dropdown-end">
              <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" />
                </div>
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={handleSignOut}>Logout</a>
                </li>
              </ul>
            </div>
          </>
        ) : (
          <>
            {isLoading ? null : (
              <>
                {user ? (
                  <>
                    <span className="flex flex-row items-center gap-4">
                      <p className="">{user.nickname}</p>
                      <a className="btn normal-case" href="/api/auth/logout">
                        logout
                      </a>
                    </span>
                  </>
                ) : (
                  <>
                    <a className="btn normal-case" href="/api/auth/login">
                      login
                    </a>
                  </>
                )}
              </>
            )}
          </>
        )}
      </div> */}
    </div>
  );
}

export default Navbar;
