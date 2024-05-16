import React  from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const navigate = useNavigate();
    const handleCancel = () => {
        // Navigate back to home page
        navigate('/home/key');
      };
  return (
    <div>
      <section className="p-3 p-md-4 p-xl-5">
        <div className="container">
          <div className="card border-over shadow-sm">
            <div className="row g-0">
              <div className="col-12 col-md-6 text-bg-over">
                <div className="d-flex align-items-center justify-content-center h-100">
                  <div className="col-10 col-xl-8 py-3">
                    img here
                    <hr className="border-over-2 mb-4" />
                    <h2 className="h1 mb-4">We make digital products that drive you to stand out.</h2>
                    <p className="lead m-0">
                      We write words, take photos, make videos, and interact with artificial intelligence.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div className="card-body p-3 p-md-4 p-xl-5">
                  <div className="row">
                    <div className="col-12">
                      <div className="mb-5">
                        <h3>Log in</h3>
                      </div>
                    </div>
                  </div>
                  <form action="#!">
                    <div className="row gy-3 gy-md-4">
                      <div className="col-12">
                        <label htmlFor="email" className="form-label">
                          Email <span className="text-danger">*</span>
                        </label>
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="name@example.com"
                          required
                        />
                      </div>
                      <div className="col-12">
                        <label htmlFor="password" className="form-label">
                          Password <span className="text-danger">*</span>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          name="password"
                          id="password"
                          required
                        />
                      </div>
                      <div className="col-12">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="remember_me"
                            id="remember_me"
                          />
                          <label className="form-check-label text-secondary" htmlFor="remember_me">
                            Keep me logged in
                          </label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="d-grid">
                          <button className="btn btn-over btn-lg" type="submit" onClick={handleCancel}>
                            Log in now
                          </button>
                        </div>
                      </div>
                    </div>
                  </form>
                  <div className="row">
                    <div className="col-12">
                      <hr className="mt-5 mb-4 border-secondary" />
                      <div className="d-flex gap-2 gap-md-4 flex-column flex-md-row justify-content-md-end">
                        <a href="#!" className="link-secondary text-decoration-none">
                          Create new account
                        </a>
                        <a href="#!" className="link-secondary text-decoration-none">
                          Forgot password
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
    </div>
        )
}
export default Login;  