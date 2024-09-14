import { Icon } from '@iconify/react';
import React, { Fragment } from 'react';
import { Fade } from 'react-reveal';
import { Button, Col, Container, Row, UncontrolledTooltip } from 'reactstrap';
import DisplayLottie from '../components/DisplayLottie';
import { skillsSection } from '../portfolio';
import Image from 'next/image';

const Skills = () => {
  return (
    skillsSection && (
      <Container className='text-center my-5 section section-lg'>
        <h1 className='h1'>{skillsSection.title}</h1>
        <p className='lead'>{skillsSection.subTitle}</p>
        {skillsSection.data.map((section, index) => {
          return (
            <Row className='my-5' key={index}>
              <Col lg='6' className='order-2 order-lg-1'>
                <Fade left duration={2000}>
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      position: 'relative',
                    }}
                  >
                    <Image
                      src={section.imageSrc || ''}
                      width={500}
                      height={500}
                      // layout='fill'
                      objectFit='contain'
                    />
                  </div>
                </Fade>
              </Col>
              <Col lg='6' className='order-1 order-lg-2'>
                <Fade right duration={2000}>
                  <h3 className='h3 mb-2 mr-2'>{section.title}</h3>
                  <div className='d-flex justify-content-center flex-wrap mb-2'>
                    {section.softwareSkills.map((skill, i) => {
                      return (
                        <Fragment key={i}>
                          <div
                            className='icon icon-lg icon-shape shadow-sm rounded-circle m-1'
                            id={skill.skillName.replace(/\s/g, '')}
                          >
                            <Icon
                              icon={skill.fontAwesomeClassname}
                              data-inline='false'
                            ></Icon>
                          </div>
                          <UncontrolledTooltip
                            delay={0}
                            placement='bottom'
                            target={skill.skillName.replace(/\s/g, '')}
                          >
                            {skill.skillName}
                          </UncontrolledTooltip>
                        </Fragment>
                      );
                    })}
                  </div>
                  <div>
                    {section.skills.map((skill, i) => {
                      return <p key={i}>{skill}</p>;
                    })}
                  </div>
                  <div className='pb-4'>
                    {section.github && (
                      <Button
                        className='btn-icon'
                        color='github'
                        href={section.github}
                        target='_blank'
                        rel='noopener'
                        aria-label='Github Link'
                      >
                        <span className='btn-inner--icon'>
                          <i className='fa fa-github' />
                        </span>
                        <span className='nav-link-inner--text ml-1'>Repo</span>
                      </Button>
                    )}
                    {section.link && (
                      <Button
                        className='btn-icon'
                        color='success'
                        href={section.link}
                        target='_blank'
                        rel='noopener'
                        aria-label='Live Site Link'
                      >
                        <span className='btn-inner--icon'>
                          <i className='fa fa-arrow-right mr-2' />
                        </span>
                        <span className='nav-link-inner--text ml-1'>Live Site</span>
                      </Button>
                    )}
                    {section.blog && (
                      <Button
                        className='btn-icon'
                        color='info'
                        href={section.blog}
                        target='_blank'
                        rel='noopener'
                        aria-label='Blog Post Link'
                      >
                        <span className='btn-inner--icon'>
                          <i className='fa fa-rss mr-2' />
                        </span>
                        <span className='nav-link-inner--text ml-1'>Blog Post</span>
                      </Button>
                    )}
                  </div>
                </Fade>
              </Col>
            </Row>
          );
        })}
      </Container>
    )
  );
};

export default Skills;
