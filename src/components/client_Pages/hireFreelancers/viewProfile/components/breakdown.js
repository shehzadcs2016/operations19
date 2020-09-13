import React from 'react';
import { Card, CardHeader, CardBody } from "reactstrap";
import { Progress } from 'reactstrap';


const Breakdown = ({freelancerProfile}) => {
  const getPercentage = (value) => {
    return String((value/freelancerProfile.total_reviews) * 100)
  }
  return (
          <Card className="h-100">
          <CardHeader>
              <h3 className="h4">Review Breakdown</h3>
            </CardHeader>
            <CardBody>
              <p className="py-2" style={{color:'gray'}}>5 Star</p><Progress color="gray" value={getPercentage(freelancerProfile['5_star'])}/>
              <p className="py-2" style={{color:'gray'}}>4 Star</p><Progress color="gray" value={getPercentage(freelancerProfile['4_star'])}/>
              <p className="py-2" style={{color:'gray'}}>3 Star</p><Progress color="gray" value={getPercentage(freelancerProfile['3_star'])}/>
              <p className="py-2" style={{color:'gray'}}>2 Star</p><Progress color="gray" value={getPercentage(freelancerProfile['2_star'])}/>
              <p className="py-2" style={{color:'gray'}}>1 Star</p><Progress color="gray" value={getPercentage(freelancerProfile['1_star'])}/>
            </CardBody>
          </Card>
  )
}

export default Breakdown;