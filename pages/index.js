import "../styles.scss";

export default () => (
  <>
    <nav class="navbar navbar-expand navbar-dark bg-primary mb-3">
      <a class="navbar-brand" href="#">
        Navbar
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
          <a class="nav-item nav-link active" href="#">
            Home <span class="sr-only">(current)</span>
          </a>
          <a class="nav-item nav-link" href="#">
            Features
          </a>
          <a class="nav-item nav-link" href="#">
            Pricing
          </a>
          <a
            class="nav-item nav-link disabled"
            href="#"
            tabindex="-1"
            aria-disabled="true"
          >
            Disabled
          </a>
        </div>
      </div>
    </nav>
    <div className="container">
      <div className="example">Hello World!</div>

      <div className="mb-3">
        <button className="btn btn-primary mr-1">Primary</button>
        <button className="btn btn-secondary mr-1">Secondary</button>
        <button className="btn btn-success mr-1">Success</button>
        <button className="btn btn-warning mr-1">Warning</button>
        <button className="btn btn-danger mr-1">Danger</button>
      </div>

      <div class="alert alert-primary" role="alert">
        A simple primary alert with{" "}
        <a href="#" class="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </div>
      <div class="alert alert-secondary" role="alert">
        A simple secondary alert with{" "}
        <a href="#" class="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </div>
      <div class="alert alert-success" role="alert">
        A simple success alert with{" "}
        <a href="#" class="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </div>
      <div class="alert alert-danger" role="alert">
        A simple danger alert with{" "}
        <a href="#" class="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </div>
      <div class="alert alert-warning" role="alert">
        A simple warning alert with{" "}
        <a href="#" class="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </div>
      <div class="alert alert-info" role="alert">
        A simple info alert with{" "}
        <a href="#" class="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </div>
      <div class="alert alert-light" role="alert">
        A simple light alert with{" "}
        <a href="#" class="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </div>
      <div class="alert alert-dark" role="alert">
        A simple dark alert with{" "}
        <a href="#" class="alert-link">
          an example link
        </a>
        . Give it a click if you like.
      </div>

      <div class="card-group">
        <div class="card text-white bg-primary mb-3">
          <div class="card-header">Header</div>
          <div class="card-body">
            <h5 class="card-title">Primary card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div class="card text-white bg-secondary mb-3">
          <div class="card-header">Header</div>
          <div class="card-body">
            <h5 class="card-title">Secondary card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div class="card text-white bg-success mb-3">
          <div class="card-header">Header</div>
          <div class="card-body">
            <h5 class="card-title">Success card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div class="card text-white bg-danger mb-3">
          <div class="card-header">Header</div>
          <div class="card-body">
            <h5 class="card-title">Danger card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>

      <div className="card-group">
        <div class="card bg-warning mb-3">
          <div class="card-header">Header</div>
          <div class="card-body">
            <h5 class="card-title">Warning card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div class="card text-white bg-info mb-3">
          <div class="card-header">Header</div>
          <div class="card-body">
            <h5 class="card-title">Info card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div class="card bg-light mb-3">
          <div class="card-header">Header</div>
          <div class="card-body">
            <h5 class="card-title">Light card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div class="card text-white bg-dark mb-3">
          <div class="card-header">Header</div>
          <div class="card-body">
            <h5 class="card-title">Dark card title</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            This is a test for primary <a href="#">color link</a>.
          </div>
        </div>
      </div>

      <div className="mt-3">
        <div class="progress mb-3">
          <div
            class="progress-bar bg-success"
            role="progressbar"
            style={{ width: "25%" }}
          />
        </div>
        <div class="progress mb-3">
          <div
            class="progress-bar bg-info"
            role="progressbar"
            style={{ width: "50%" }}
          />
        </div>
        <div class="progress mb-3">
          <div
            class="progress-bar bg-warning"
            role="progressbar"
            style={{ width: "75%" }}
          />
        </div>
        <div class="progress mb-3">
          <div
            class="progress-bar bg-danger"
            role="progressbar"
            style={{ width: "100%" }}
          />
        </div>
      </div>

      <ul class="list-group">
        <li class="list-group-item">Dapibus ac facilisis in</li>

        <li class="list-group-item list-group-item-primary">
          A simple primary list group item
        </li>
        <li class="list-group-item list-group-item-secondary">
          A simple secondary list group item
        </li>
        <li class="list-group-item list-group-item-success">
          A simple success list group item
        </li>
        <li class="list-group-item list-group-item-danger">
          A simple danger list group item
        </li>
        <li class="list-group-item list-group-item-warning">
          A simple warning list group item
        </li>
        <li class="list-group-item list-group-item-info">
          A simple info list group item
        </li>
        <li class="list-group-item list-group-item-light">
          A simple light list group item
        </li>
        <li class="list-group-item list-group-item-dark">
          A simple dark list group item
        </li>
      </ul>

      <div className="mt-3 mb-3">
        <span class="badge badge-primary mr-1">Primary</span>
        <span class="badge badge-secondary mr-1">Secondary</span>
        <span class="badge badge-success mr-1">Success</span>
        <span class="badge badge-danger mr-1">Danger</span>
        <span class="badge badge-warning mr-1">Warning</span>
        <span class="badge badge-info mr-1">Info</span>
        <span class="badge badge-light mr-1">Light</span>
        <span class="badge badge-dark">Dark</span>
      </div>
    </div>
  </>
);
