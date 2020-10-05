import { MainLayout } from 'layouts/MainLayout';
import { useBuyerInfo } from 'contexts/buyerInfo/BuyerInfoContext';
import { CustomPageWithoutProps } from 'types/Page';

const Review: CustomPageWithoutProps = () => {
  const buyerInfo = useBuyerInfo();
  const {
    email,
    firstName,
    lastName,
    notes,
    phone,
    shippingLocation,
  } = buyerInfo;

  console.log(buyerInfo);

  return (
    <div className="container">
      <div className="columns">
        <div className="column is-half">
          <h4 className="is-size-4 has-text-weight-bold">Review</h4>

          {firstName && (
            <div>
              <h6 className="is-size-6 has-text-weight-bold">Name</h6>
              <p>
                {firstName} {lastName}
              </p>
            </div>
          )}

          {email && (
            <div>
              <h6 className="is-size-6 has-text-weight-bold">Email</h6>
              <p>{email}</p>
            </div>
          )}

          {phone && (
            <div>
              <h6 className="is-size-6 has-text-weight-bold">Phone</h6>
              <p>{phone}</p>
            </div>
          )}

          {shippingLocation && (
            <div>
              <h6 className="is-size-6 has-text-weight-bold">
                Shipping location
              </h6>
              <p>{shippingLocation}</p>
            </div>
          )}

          {notes && (
            <div>
              <h6 className="is-size-6 has-text-weight-bold">Notes</h6>
              <p>{notes}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Review.Layout = MainLayout;

export default Review;
