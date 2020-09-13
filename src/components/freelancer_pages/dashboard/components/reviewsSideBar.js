import React from "react";
import BorderLinearProgress from "../../components/linearComponent"
import Rating from '@material-ui/lab/Rating';

const reviewsSideBar = (props) => {
    const { reviewsData } = props;
    return (
        <>
            {reviewsData ?
                <>
                    <div className="w-100 text-center start_color_font border_bottom">
                        <Rating name="half-rating-read"
                            defaultValue={reviewsData ? parseFloat(reviewsData.average_rating) : 0}
                            precision={0.5}
                            readOnly />
                        <p>{reviewsData ? parseFloat(reviewsData.average_rating).toFixed(1) : ""}</p>
                    </div>
                    <div className="w-100 stars_label_s border_bottom pb-4 BorderLinearProgress">
                        <div className="w-100 mt-4"><h5><strong>Rating SnapShoot</strong></h5></div>
                        <div className="w-100 text-center start_color_font mt-2 right_sidebar_review">
                            <div class="d-flex">
                                <div class="pr-2 flex-fill bd-highlight"><p>5 stars</p></div>
                                <div class="pr-2 pt-2 flex-fill bd-highlight"><BorderLinearProgress variant="determinate" value={reviewsData["5_star"]} /></div>
                                <div class="flex-fill bd-highlight">({reviewsData["5_star"]})</div>
                            </div>
                        </div>
                        <div className="w-100 text-center start_color_font mt-2 right_sidebar_review">
                            <div class="d-flex">
                                <div class="pr-2 flex-fill bd-highlight"><p>4 stars</p></div>
                                <div class="pr-2 pt-2 flex-fill bd-highlight"><BorderLinearProgress variant="determinate" value={reviewsData["4_star"]} /></div>
                                <div class="flex-fill bd-highlight"> ({reviewsData["4_star"]})</div>
                            </div>
                        </div>
                        <div className="w-100 text-center start_color_font mt-2 right_sidebar_review">
                            <div class="d-flex">
                                <div class="pr-2 flex-fill bd-highlight"><p>3 stars</p></div>
                                <div class="pr-2 pt-2 flex-fill bd-highlight"><BorderLinearProgress variant="determinate" value={reviewsData["3_star"]} /></div>
                                <div class="flex-fill bd-highlight"> ({reviewsData["3_star"]})</div>
                            </div>
                        </div>
                        <div className="w-100 text-center start_color_font mt-2 right_sidebar_review">
                            <div class="d-flex">
                                <div class="pr-2 flex-fill bd-highlight"><p>2 stars</p></div>
                                <div class="pr-2 pt-2 flex-fill bd-highlight"><BorderLinearProgress variant="determinate" value={reviewsData["2_star"]} /></div>
                                <div class="flex-fill bd-highlight"> ({reviewsData["2_star"]})</div>
                            </div>
                        </div>
                        <div className="w-100 text-center start_color_font mt-2 right_sidebar_review">
                            <div class="d-flex">
                                <div class="pr-2 flex-fill bd-highlight"><p>1 stars</p></div>
                                <div class="pr-2 pt-2 flex-fill bd-highlight"><BorderLinearProgress variant="determinate" value={reviewsData["1_star"]} /></div>
                                <div class="flex-fill bd-highlight"> ({reviewsData["1_star"]})</div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="w-100 text-center start_color_font mt-3">
                        3 stars <BorderLinearProgress variant="determinate" value={50} />
                        ({reviewsData["3_star"]})
                    </div>
                    <div className="w-100 text-center start_color_font mt-3">
                        2 stars <BorderLinearProgress variant="determinate" value={50} />
                        ({reviewsData["2_star"]})
                    </div>
                    <div className="w-100 text-center start_color_font mt-3">
                        1 stars <BorderLinearProgress variant="determinate" value={50} />
                        ({reviewsData["1_star"]})
                    </div> */}
                    <div className="w-100 mt-3 end_color_font review_sidebar_last_section">
                        <h5 className="mb-3"><strong>Rating Breakdown</strong></h5>
                        <div className="w-100 mb-2">
                            <p className="float-left mb-2">Seller Communication Level</p>
                            <p className="float-right">5 <Rating name="customized-10" defaultValue={2} max={1} /></p>
                        </div>

                        <div className="w-100 mb-2">
                            <p className="float-left mb-2">Recommand to a friend</p>
                            <p className="float-right">5 <Rating name="customized-10" defaultValue={2} max={1} /></p>
                        </div>

                        <div className="w-100">
                            <p className="float-left ">Service as described</p>
                            <p className="float-right">5 <Rating name="customized-10" defaultValue={2} max={1} /></p>
                        </div>
                    </div>
                </>
                : null}
        </>
    )
}

export default reviewsSideBar;