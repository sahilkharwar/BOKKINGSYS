import React from "react";

function scard() {
  return (
    <>
      <div
        class="card border-light"
        style={{
          width: "800px",
          padding: "10px",
          backgroundColor: "#92f079",
          marginLeft: "40px",
          marginTop: "20px",
          borderColor: "transparent",
          borderRadius: "18px",
        }}
      >
        <div class="card-body text-light">
          <h2>Search Your Trip</h2>
          <div>
            <div class="card text-center" style={{ width: "100%" }}>
              <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                  <li class="nav-item">
                    <a class="nav-link active" href="#">
                      Domestic
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">
                      International
                    </a>
                  </li>
                </ul>
              </div>
              <div
                class="card-body"
                style={{
                  backgroundColor: "#92f079",
                }}
              >
                <form>
                  <div class="row ml-3">
                    <div class="col">
                      <div class="dropdown">
                        <button
                          class="btn btn-light dropdown-toggle form-control"
                          type="button"
                          id="dropdownMenu2"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          style={{ width: "150px", height: "60px" }}
                        >
                          From
                        </button>
                        <div
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenu2"
                        >
                          <button class="dropdown-item" type="button">
                            Action
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <div class="dropdown">
                        <button
                          class="btn btn-light dropdown-toggle form-control"
                          type="button"
                          id="dropdownMenu2"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          style={{ width: "150px", height: "60px" }}
                        >
                          To
                        </button>
                        <div
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenu2"
                        >
                          <button class="dropdown-item" type="button">
                            Action
                          </button>
                        </div>
                      </div>
                    </div>
                    <div class="col">
                      <input
                        type="date"
                        class="form-control"
                        placeholder="End Date"
                        style={{ width: "180px", height: "60px" }}
                      />
                    </div>

                    <div class="col">
                      <button
                        type="button"
                        class="btn btn-light form-control"
                        style={{
                          width: "80px",
                          height: "50px",
                          marginTop: "8px",
                        }}
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default scard;
