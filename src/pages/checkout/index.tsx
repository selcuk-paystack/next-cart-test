import Router from 'next/router';
import { MainLayout } from 'layouts/MainLayout';
import { useFormik } from 'formik';
import classNames from 'classnames';
import {
  useBuyerInfo,
  useDispatchBuyerInfo,
} from 'contexts/buyerInfo/BuyerInfoContext';
import { fillBuyerForm } from 'contexts/buyerInfo/buyerInfoActions';
import { checkoutSchema } from 'validations/schemas/checkoutSchema';
import { CustomPageWithoutProps } from 'types/Page';

const Checkout: CustomPageWithoutProps = () => {
  const buyerInfoState = useBuyerInfo();
  const dispatchBuyerInfo = useDispatchBuyerInfo();

  const formik = useFormik({
    initialValues: buyerInfoState,
    validationSchema: checkoutSchema,
    onSubmit: (values, helpers) => {
      dispatchBuyerInfo(fillBuyerForm(values));
      Router.push('/review');
    },
  });

  return (
    <div className="container">
      <div className="columns">
        <div className="column is-half">
          <form onSubmit={formik.handleSubmit}>
            <div className="field">
              <label className="label">First name</label>
              <div className="control">
                <input
                  className={classNames({
                    input: true,
                    'is-danger':
                      formik.errors.firstName && formik.touched.firstName,
                  })}
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formik.values.firstName}
                  onChange={formik.handleChange}
                />
                {formik.errors.firstName && formik.touched.firstName && (
                  <p className="help is-danger">{formik.errors.firstName}</p>
                )}
              </div>
            </div>

            <div className="field">
              <label className="label">Last name</label>
              <div className="control">
                <input
                  className={classNames({
                    input: true,
                    'is-danger':
                      formik.errors.lastName && formik.touched.lastName,
                  })}
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formik.values.lastName}
                  onChange={formik.handleChange}
                />
                {formik.errors.lastName && formik.touched.lastName && (
                  <p className="help is-danger">{formik.errors.lastName}</p>
                )}
              </div>
            </div>

            <div className="field">
              <label className="label">Email address</label>
              <div className="control">
                <input
                  className={classNames({
                    input: true,
                    'is-danger': formik.errors.email && formik.touched.email,
                  })}
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                />
                {formik.errors.email && formik.touched.email && (
                  <p className="help is-danger">{formik.errors.email}</p>
                )}
              </div>
            </div>

            <div className="field">
              <label className="label">Phone number</label>
              <div className="control">
                <input
                  className={classNames({
                    input: true,
                    'is-danger': formik.errors.phone && formik.touched.phone,
                  })}
                  type="text"
                  name="phone"
                  placeholder="Phone number"
                  value={formik.values.phone}
                  onChange={formik.handleChange}
                />
                {formik.errors.phone && formik.touched.phone && (
                  <p className="help is-danger">{formik.errors.phone}</p>
                )}
              </div>
            </div>

            <div className="field">
              <label className="label">Shipping location</label>
              <div className="control">
                <div
                  className={classNames({
                    select: true,
                    'is-danger':
                      formik.errors.shippingLocation &&
                      formik.touched.shippingLocation,
                  })}
                >
                  <select
                    name="shippingLocation"
                    defaultValue={formik.values.shippingLocation}
                    onChange={formik.handleChange}
                  >
                    <option value="" disabled>
                      Select a shipping location...
                    </option>
                    <option value="lagos">Lagos</option>
                    <option value="rome">Rome</option>
                    <option value="london">London</option>
                  </select>
                </div>
                {formik.errors.shippingLocation &&
                  formik.touched.shippingLocation && (
                    <p className="help is-danger">
                      {formik.errors.shippingLocation}
                    </p>
                  )}
              </div>
            </div>

            <div className="field">
              <label className="label">Notes (optional)</label>
              <div className="control">
                <textarea
                  className="textarea"
                  name="notes"
                  placeholder="e.g. Hello world"
                  value={formik.values.notes}
                  onChange={formik.handleChange}
                ></textarea>
              </div>
            </div>

            <div className="field">
              <button type="submit" className="button is-success">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

Checkout.Layout = MainLayout;

export default Checkout;
