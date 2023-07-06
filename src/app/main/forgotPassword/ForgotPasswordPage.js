import { useState } from "react";
import { Link } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";
import _ from "@lodash";
import { yupResolver } from "@hookform/resolvers/yup";
import LoadingButton from "@mui/lab/LoadingButton";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import FuseSvgIcon from "@fuse/core/FuseSvgIcon";
import Paper from "@mui/material/Paper";
import jwtService from "../../auth/services/jwtService";

/**
 * Form Validation Schema
 */
const schema = yup.object().shape({
  email: yup
    .string()
    .email("You must enter a valid email")
    .required("You must enter a email"),
});

const defaultValues = {
  email: "",
  password: "",
  remember: true,
};

function ForgotPasswordPage() {
  const [loading, setLoading] = useState(false);
  const { control, formState, handleSubmit, setError, setValue } = useForm({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(schema),
  });

  const { isValid, dirtyFields, errors } = formState;

  function onSubmit({ email, password }) {
    setLoading(true);
    jwtService
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        setLoading(false);
        // No need to do anything, user data will be set at app/auth/AuthContext
      })
      .catch((error) => {
        setLoading(false);
        setError(error.error, {
          type: "manual",
          message: error.error,
        });
      });
  }

  return (
    <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-1 min-w-0">
      <Paper className="h-full sm:h-auto md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full md:w-full py-8 px-16 sm:p-48 md:p-64 sm:rounded-2xl md:rounded-none sm:shadow md:shadow-none ltr:border-r-1 rtl:border-l-1">
        <div className="w-full max-w-320 sm:w-320 mx-auto sm:mx-0">
          <img
            className="login__logo mx-auto"
            src="assets/images/logo/logo.png"
            alt="logo"
          />
          <Typography className="mt-32 text-4xl font-extrabold tracking-tight leading-tight">
            Forgot Password
          </Typography>
          <div className="flex items-baseline mt-2 font-medium">
            <Typography>
              Enter your email and we'll send you instructions to reset your
              password.
            </Typography>
          </div>

          <form
            name="loginForm"
            noValidate
            className="flex flex-col justify-center w-full mt-32"
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  className="mb-24"
                  label="Email"
                  autoFocus
                  type="email"
                  error={!!errors.email}
                  helperText={errors?.email?.message}
                  variant="outlined"
                  required
                  fullWidth
                />
              )}
            />

            <LoadingButton
              loading={loading}
              variant="contained"
              color="secondary"
              className=" w-full mt-16"
              aria-label="Sign in"
              disabled={_.isEmpty(dirtyFields) || !isValid}
              type="submit"
              size="large"
            >
              Send verification code
            </LoadingButton>

            <div className="text-center mt-20">
              <Link className="text-lg font-medium" to="/sign-in">
                &#8678; Back to Sign in
              </Link>
            </div>
          </form>
        </div>
      </Paper>
    </div>
  );
}

export default ForgotPasswordPage;
