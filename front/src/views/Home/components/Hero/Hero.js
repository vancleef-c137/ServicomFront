import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { HeroShaped } from 'components/organisms';

const useStyles = makeStyles(() => ({
  image: {
    objectFit: 'cover',
  },
  fontWeight700: {
    fontWeight: 700,
  },
}));

const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <HeroShaped
        leftSide={
          <div>
            <SectionHeader
              title={
                <span>
                  <Typography component="span" variant="inherit" color="primary">
                    With Servicom,
                  </Typography>{' '}
                  life becomes easier
                </span>
              }
              subtitle="Our mission is to spread education that is easy accessible and everyone can learn."
              ctaGroup={[
                <Button variant="contained" color="primary" size="large">
                  Start now
                </Button>,
              ]}
              align="left"
              titleVariant="h3"
            />
          </div>
        }
        rightSide={
          <Image
            src="https://i.ibb.co/xgdc8Fc/Blue-and-White-Voter-Education-Posters.png"
            srcSet="https://i.ibb.co/xgdc8Fc/Blue-and-White-Voter-Education-Posters.png 2x"
            alt="..."
            className={classes.image}
            lazyProps={{
              width: '100%',
              height: '100%',
            }}
          />
        }
      />
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;
