import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import "../../Styles/pages/adminTable.css";
import { Grid, Typography, Button } from "@mui/material";

const columns = [
  { field: "id", headerName: "ID", width: 50 },
  { field: "firstName", headerName: "First name", width: 150 },
  { field: "lastName", headerName: "Last name", width: 150 },
  {
    field: "phone",
    headerName: "phone",
    width: 200,
  },
  { field: "email", headerName: "Email", width: 200 },
  {
    field: "options",
    headerName: "Options",
    width: 250,
    renderCell: (params) => {
      return (
        <>
          <Button
            variant="outlined"
            color="success"
            size="small"
            style={{ margin: "5px" }}
          >
            View
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="small"
            style={{ margin: "5px" }}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            color="error"
            size="small"
            style={{ margin: "5px" }}
          >
            Delete
          </Button>
        </>
      );
    },
  },
];

export default function UserOrdersTable() {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [userOrders, setUserOrders] = React.useState();

  React.useEffect(() => {
    fetch("https://fakestoreapi.com/users")
      .then((res) => res.json())
      .then((json) => setUserOrders(json))
      .finally((json) => setIsLoaded(true));
  }, [userOrders]);

  return (
    <div className="adminPg" style={{ marginTop: "100px" }}>
      <h1 className="adminHd">Admin Page</h1>
      <div className="adminTable">
        <Grid container>
          <div style={{ height: 400, width: "100%" }}>
            <Typography variant="h5">User Orders</Typography>
            {isLoaded ? (
              <DataGrid
                rows={userOrders.map(function (row) {
                  return {
                    id: row.id,
                    firstName: row.name.firstname,
                    lastName: row.name.lastname,
                    phone: row.phone,
                    email: row.email,
                    options: (
                      <Button variant="outlined" color="success" size="small">
                        View
                      </Button>
                    ),
                  };
                })}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
              />
            ) : (
              <div className="App-logo">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 16 16"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 .75c.172 0 .333.034.484.102a1.214 1.214 0 0 1 .664.664c.068.15.102.312.102.484s-.034.333-.102.484a1.214 1.214 0 0 1-.265.399 1.324 1.324 0 0 1-.399.273A1.254 1.254 0 0 1 8 3.25c-.172 0-.333-.031-.484-.094a1.324 1.324 0 0 1-.672-.672A1.254 1.254 0 0 1 6.75 2c0-.172.031-.333.094-.484.067-.151.159-.284.273-.399.115-.114.248-.203.399-.265A1.17 1.17 0 0 1 8 .75zM2.633 3.758a1.111 1.111 0 0 1 .68-1.031 1.084 1.084 0 0 1 .882 0c.136.057.253.138.352.242.104.099.185.216.242.351a1.084 1.084 0 0 1 0 .883 1.122 1.122 0 0 1-.594.594 1.169 1.169 0 0 1-.883 0 1.19 1.19 0 0 1-.359-.234 1.19 1.19 0 0 1-.234-.36 1.169 1.169 0 0 1-.086-.445zM2 7a.941.941 0 0 1 .703.297A.941.941 0 0 1 3 8a.97.97 0 0 1-.078.39 1.03 1.03 0 0 1-.531.532A.97.97 0 0 1 2 9a.97.97 0 0 1-.39-.078 1.104 1.104 0 0 1-.32-.211 1.104 1.104 0 0 1-.212-.32A.97.97 0 0 1 1 8a.97.97 0 0 1 .29-.703A.97.97 0 0 1 2 7zm.883 5.242a.887.887 0 0 1 .531-.805.863.863 0 0 1 .68 0c.11.047.203.11.281.188a.887.887 0 0 1 .188.96.887.887 0 0 1-1.148.461.913.913 0 0 1-.462-.46.863.863 0 0 1-.07-.344zM8 13.25c.208 0 .385.073.531.219A.723.723 0 0 1 8.75 14a.723.723 0 0 1-.219.531.723.723 0 0 1-.531.219.723.723 0 0 1-.531-.219A.723.723 0 0 1 7.25 14c0-.208.073-.385.219-.531A.723.723 0 0 1 8 13.25zm3.617-1.008c0-.177.06-.325.18-.445s.268-.18.445-.18.326.06.445.18c.12.12.18.268.18.445s-.06.326-.18.445a.605.605 0 0 1-.445.18.605.605 0 0 1-.445-.18.605.605 0 0 1-.18-.445zM14 7.5a.48.48 0 0 1 .352.148A.48.48 0 0 1 14.5 8a.48.48 0 0 1-.148.352A.48.48 0 0 1 14 8.5a.48.48 0 0 1-.352-.148A.48.48 0 0 1 13.5 8a.48.48 0 0 1 .148-.352A.48.48 0 0 1 14 7.5zm-1.758-5.117c.188 0 .365.036.531.11a1.413 1.413 0 0 1 .735.734c.073.166.11.343.11.53 0 .188-.037.365-.11.532a1.413 1.413 0 0 1-.735.734 1.31 1.31 0 0 1-.53.11c-.188 0-.365-.037-.532-.11a1.415 1.415 0 0 1-.734-.734 1.31 1.31 0 0 1-.11-.531c0-.188.037-.365.11-.531a1.413 1.413 0 0 1 .734-.735c.167-.073.344-.11.531-.11z"></path>
                </svg>
              </div>
            )}
          </div>
        </Grid>
        {/* <div className="right">
          <div style={{ height: 400, width: 500 }}>
                <userOrdersGrid
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                    checkboxSelection
                />
            </div>
          </div> */}
      </div>
    </div>
  );
}
