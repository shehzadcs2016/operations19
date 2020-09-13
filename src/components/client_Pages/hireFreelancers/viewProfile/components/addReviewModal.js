import React from 'react';
import CustomModal from "../../../../shared/modal";
import { Textfield } from "../../../../shared/formComponents";
import { Button } from "@material-ui/core";
import StarRatingComponent from 'react-star-rating-component';

const AddReviewModal = (props) => {
  const [value, setValue] =  React.useState(0);
  const [comment, setComment] = React.useState("");
  const onCommentChange = (event) => {
    setComment(event.target.value);
  }
    return (
      <CustomModal
        {...props}
        title="Add Review"
      >
        <div>
        <div>
        <h5 className="pb-2">
                  Rating
        </h5>
        </div>
        <StarRatingComponent
            name={"newReview"}
            value={value}
            starCount={5}
            onStarClick={
              (nextValue, prevValue, name) => {
                setValue(nextValue)
              }
            
            } /* on icon click handler */
            // starColor="yellow" /* color of selected icons, default `#ffb400` */
            emptyStarColor="gray" /* color of non-selected icons, default `#333` */
            editing={true} /* is component available for editing, default `true` */
/>
<h5 className="py-2">
                  Comment
        </h5>
          <Textfield
            name="reviewComment"
            label="Please leave review comment"
            multiline
            rows="4"
            onChange={onCommentChange}
          />
          <Button
            variant="contained"
            style={{ backgroundColor: "#2dced4", color: "white" }}
            value={comment}
            className="mx-auto"
            onClick={() => {
              props.onAddReview({
                rate_by_star: value,
                text: comment
              })
            }}
          >
            Submit
          </Button>
        </div>
      </CustomModal>
    );
  };

export default AddReviewModal;