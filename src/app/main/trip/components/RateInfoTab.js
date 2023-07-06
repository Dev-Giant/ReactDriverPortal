import {
  autocompleteClasses,
  Card,
  CardContent,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { memo } from "react";

const Root = styled("div")(({ theme }) => ({
  "& table ": {
    "& th:first-of-type, & td:first-of-type": {
      paddingLeft: `${0}!important`,
    },
    "& th:last-child, & td:last-child": {
      paddingRight: `${0}!important`,
    },
  },

  "& .divider": {
    width: 1,
    backgroundColor: theme.palette.divider,
    height: 144,
  },

  "& .seller": {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.getContrastText(theme.palette.primary.light),
    marginRight: 0,
    paddingRight: 66,
    width: 480,
    "@media(max-width:768px)": {
      width: "calc(100vw - 64px)",
    },
    "& .divider": {
      backgroundColor: theme.palette.getContrastText(
        theme.palette.primary.light
      ),
      opacity: 0.5,
    },
  },
}));

const RateInfoTab = ({ data }) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });

  return (
    <Root className="grow shrink-0 p-0 w-full">
      {data.rate && (
        <Card className="xs:w-auto md:w-xl mx-auto shadow-0">
          <CardContent className="xs:p-16 md:p-88 print:p-0">
            <Typography color="text.secondary" className="mb-32">
              {data.date}
            </Typography>

            <div className="xs:block md:flex justify-between">
              <div>
                <table className="mb-16">
                  <tbody>
                    <tr>
                      <td className="pb-4">
                        <Typography
                          className="font-light"
                          variant="h6"
                          color="text.secondary"
                        >
                          INVOICE
                        </Typography>
                      </td>
                      <td className="pb-4 px-8">
                        <Typography
                          className="font-light"
                          variant="h6"
                          color="inherit"
                        >
                          {data.reference}
                        </Typography>
                      </td>
                    </tr>
                  </tbody>
                </table>

                <Typography color="text.secondary">
                  {data.dispatch_name}
                </Typography>

                {data.address1 && (
                  <Typography color="text.secondary">{data.address}</Typography>
                )}
                {data.contact1 && (
                  <Typography color="text.secondary">
                    {data.contact1}
                  </Typography>
                )}
                {data.email1 && (
                  <Typography color="text.secondary">{data.email}</Typography>
                )}
              </div>

              <div className="seller flex items-center p-16">
                <img
                  className="w-80"
                  src="assets/images/logos/newsynchron.png"
                  alt="logo"
                />

                <div className="divider mx-8 h-96" />

                <div className="px-8">
                  <Typography color="inherit">{data.broker_agent}</Typography>

                  <Typography color="inherit">{data.address2}</Typography>
                  <Typography color="inherit">{data.contact2}</Typography>
                  <Typography color="inherit">{data.email2}</Typography>
                  <Typography color="inherit">{data.website}</Typography>
                </div>
              </div>
            </div>

            <div className="mt-96">
              <Typography className="mb-24 print:mb-12" variant="body1">
                Please pay within 15 days. Thank you for your business.
              </Typography>

              <div className="flex items-center mb-64">
                <div className="shrink-0">
                  <img
                    className="w-64"
                    src="assets/images/logos/newsynchron.png"
                    alt="logo"
                  />
                </div>

                <Typography
                  className="font-normal px-24"
                  variant="caption"
                  color="text.secondary"
                  sx={{ width: { xs: "calc(100vw - 96px)", md: "auto" } }}
                >
                  In condimentum malesuada efficitur. Mauris volutpat placerat
                  auctor. Ut ac congue dolor. Quisque scelerisque lacus sed
                  feugiat fermentum. Cras aliquet facilisis pellentesque. Nunc
                  hendrerit quam at leo commodo, a suscipit tellus dapibus.
                  Etiam at felis volutpat est mollis lacinia. Mauris placerat
                  sem sit amet velit mollis, in porttitor ex finibus. Proin eu
                  nibh id libero tincidunt lacinia et eget eros.
                </Typography>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </Root>
  );
};

export default memo(RateInfoTab);
