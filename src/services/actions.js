export const loadMaitres = here => {
  fetch("http://localhost:9000/grapidee/idee/maitres")
    .then(Response => Response.json())
    .then(data => here.setState({ idees: data }));
};

export const selectionnerIdee = (here, idee) => {
  if (!here.state.master) {
    here.setState({ master: idee });
  } else {
    let liste = here.state.esclave;
    liste.push(idee);
    here.setState({ esclave: liste });
  }
};
export const lierIdee = here => {
  console.log("lier", here.state.master.nom, here.state.esclave);
  here.state.esclave.map(esclave => {
    fetch(
      "http://localhost:9000/grapidee/associer/idee/" +
        here.state.master.id +
        "/" +
        esclave.id,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: {}
      }
    ).then(Response => Response.json());
  });

  here.reset();
  here.load();
};

export const delierIdee = here => {
  console.log("delier", here.state.master.nom, here.state.esclave);
  here.state.esclave.map(esclave => {
    fetch(
      "http://localhost:9000/grapidee/desassocier/idee/" +
        here.state.master.id +
        "/" +
        esclave.id,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: {}
      }
    ).then(Response => Response.json());
  });

  here.reset();
  here.load();
};

export const loadGrappes = here => {
  fetch("http://localhost:9000/grapidee/grappe")
    .then(Response => Response.json())
    .then(data => {
      console.log(data);
      here.setState({ grappe: data });
      console.log(here.state);
    });
};

export const selectionnerGrappe = (here, grappe) => {
  if (!here.state.master) {
    here.setState({ master: grappe });
  } else {
    let liste = here.state.esclave;
    liste.push(grappe);
    here.setState({ esclave: liste });
  }
};

export const lierGrappe = here => {
  console.log("lier", here.state.master.nom, here.state.esclave);
  here.state.esclave.map(esclave => {
    fetch(
      "http://localhost:9000/grapidee/associer/grappe/" +
        here.state.master.id +
        "/" +
        esclave.id,
      {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        method: "POST",
        body: {}
      }
    ).then(Response => Response.json());
  });

  here.reset();
  here.load();
};

export const delierGrappe = (here, grappe) => {
  console.log("delier", grappe.nom);
  fetch("http://localhost:9000/grapidee/desassocier/grappe/" + grappe.id, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    method: "POST",
    body: {}
  }).then(Response => Response.json());

  here.reset();
  here.load();
};
