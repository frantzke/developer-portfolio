import React from 'react';

import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Col,
  Row
} from 'reactstrap';

import { Fade } from 'react-reveal';

const ExperienceCard = ({ data }) => {
  return (
    <Col lg='12'>
      <Fade left duration={2000}>
        <Card
          style={{ flex: 1 }}
          className='shadow-lg--hover mb-3 shadow border-0 text-center rounded'
        >
          <Row className='row-grid align-items-start'>
            <Col lg='4'>
              <CardBody className=''>
                <img
                  src={data.companylogo}
                  style={{
                    objectFit: 'cover',
                    left: 0,
                    right: 0,
                    top: '7rem',
                    marginLeft: 'auto',
                    marginRight: 'auto',
                    width: '8rem',
                    height: '8rem',
                    borderRadius: '50%',
                  }}
                  className='shadow mb-3'
                  alt={data.companylogo}
                />
                <CardTitle tag='h4' className='mb-2'>
                  {data.company}
                </CardTitle>
                <CardSubtitle tag='h5' className='mb-2'>
                  {data.role}
                </CardSubtitle>
                <CardSubtitle>{data.date}</CardSubtitle>
              </CardBody>
            </Col>
            <Col lg='8'>
              <CardText tag='div' className='description p-4 text-left'>
                {data.desc}
                <ul>
                  {data.descBullets
                    ? data.descBullets.map((desc) => {
                        return <li key={desc}>{desc}</li>;
                      })
                    : null}
                </ul>
              </CardText>
            </Col>
          </Row>
        </Card>
      </Fade>
    </Col>
  );
};

export default ExperienceCard;
