/**
 * personal info
 *
 * @version 0.0.1
 * @author  RoRivers
 * @date    2016/10/12
 *
 */

/* eslint-disable no-shadow */
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { defineMessages, FormattedMessage, injectIntl } from 'react-intl';
import Waypoint from 'react-waypoint';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import { setSkillsDomInfo } from '../../actions/dominfo';
import s from './Articles.css';
import languageUrl from './img/main-language01.jpg';
import work01Url from './img/main-work01.jpg';
import work02Url from './img/main-work02.jpg';
import work03Url from './img/main-work03.jpg';

/* eslint-disable */
const messages = defineMessages({
  timeSplit: {
    id: 'time.split',
    defaultMessage: 'to',
    description: 'content education',
  },

  aboutmeTitle: {
    id: 'content.aboutme.title',
    defaultMessage: 'About Me',
    description: 'about me',
  },
  aboutmeDesc: {
    id: 'content.aboutme.desc',
    defaultMessage: 'Hi there! I’m a global citizen passionate about people, stories and technology. You’ll find me creating where they intersect, transforming ideas into digital products that people love to interact with. I’m focused on supporting entrepreneurs, startups and agencies around the world to achieve successful interactive design projects involving Web, Mobile and Responsive experiences. My designs are a mix of passion, expertise and experiences that I combine to deliver exceptional outcomes. I also love to research social media marketing, conversion ratio optimisation and psychological/emotional triggers. I’ll always have interesting things to talk about over a cup of coffee. ;)',
    description: 'about me',
  },
  aboutmeSummary1: {
    id: 'content.aboutme.summary.1',
    defaultMessage: 'Passion for building engaging user experiences;',
    description: 'about me',
  },
  aboutmeSummary2: {
    id: 'content.aboutme.summary.2',
    defaultMessage: 'Ability to conceive and transform rough concepts into intuitive and beautiful interfaces;',
    description: 'about me',
  },
  aboutmeSummary3: {
    id: 'content.aboutme.summary.3',
    defaultMessage: 'Perpetual student of clean UI/UX standards/best practices;',
    description: 'about me',
  },
  aboutmeSummary4: {
    id: 'content.aboutme.summary.4',
    defaultMessage: 'User-centered approach.',
    description: 'about me',
  },
  aboutmeLanguageTitle: {
    id: 'content.aboutme.language.title',
    defaultMessage: 'Languages I speak',
    description: 'about me',
  },

  educationTitle: {
    id: 'content.education.title',
    defaultMessage: 'Education',
    description: 'content education',
  },
  educationNo1SchoolName: {
    id: 'content.education.no1.school.name',
    defaultMessage: 'Google University',
    description: 'content education',
  },
  educationNo1StartTime: {
    id: 'content.education.no1.starttime',
    defaultMessage: '2008.9',
    description: 'content education',
  },
  educationNo1Endtime: {
    id: 'content.education.no1.endtime',
    defaultMessage: '2012.6',
    description: 'content education',
  },
  educationNo1Desc: {
    id: 'content.education.no1.desc',
    defaultMessage: 'While my education life has started through different institutions in Italy, I end up making my way in the world in the self-education by following the most influential people in the industry. I believe the web has made the self-taught option more accessible, but experience a combination of both was a great approach to consolidate my theory knowledge and build expertise not taught in colleges, be always up-to-date with the latest trends and develop the ability to process on the fly as well the instinct to step up to lead when it’s necessary.',
    description: 'content education',
  },

  workTitle: {
    id: 'content.work.title',
    defaultMessage: 'Work Experience',
    description: 'work experiences',
  },
  workNo1Company: {
    id: 'content.work.no1.company',
    defaultMessage: 'Pickevent.com',
    description: 'work experiences',
  },
  workNo1Starttime: {
    id: 'content.work.no1.starttime',
    defaultMessage: '2012.7',
    description: 'work experiences',
  },
  workNo1Endtime: {
    id: 'content.work.no1.endtime',
    defaultMessage: 'present',
    description: 'work experiences',
  },
  workNo1Job: {
    id: 'content.work.no1.job',
    defaultMessage: 'Founding Member and Lead UI/UX Designer',
    description: 'work experiences',
  },
  workNo1Desc: {
    id: 'content.work.no1.desc',
    defaultMessage: 'Pickevent is an events network focused on connecting attendees, speakers and event organisers. I’ve been working on this startup in collaboration with a small international team on all UX-related tasks that cover the whole product’s life-cycle including business analysis, information architecture, content strategy, prototyping and usability test.',
    description: 'work experiences',
  },
  workNo1Summary1: {
    id: 'content.work.no1.summary.1',
    defaultMessage: 'Main responsibilities also include;',
    description: 'work experiences',
  },
  workNo1Summary2: {
    id: 'content.work.no1.summary.2',
    defaultMessage: 'Manage product design, UX and branding;',
    description: 'work experiences',
  },
  workNo1Summary3: {
    id: 'content.work.no1.summary.3',
    defaultMessage: 'Building wireframes, mockups and UI elements;',
    description: 'work experiences',
  },
  workNo1Summary4: {
    id: 'content.work.no1.summary.4',
    defaultMessage: 'Track and analyse competitors, craft messaging and track product’s positioning.',
    description: 'work experiences',
  },

  skillsTitle: {
    id: 'content.skills.title',
    defaultMessage: 'Skills and Personal Attributes',
    description: 'content of skills',
  },
  skillsTag1: {
    id: 'content.skills.tag.1',
    defaultMessage: 'Photoshop',
    description: 'content of skills',
  },
  skillsTag2: {
    id: 'content.skills.tag.2',
    defaultMessage: 'Photoshop',
    description: 'content of skills',
  },
  skillsTag3: {
    id: 'content.skills.tag.3',
    defaultMessage: 'Photoshop',
    description: 'content of skills',
  },
  skillsTag4: {
    id: 'content.skills.tag.4',
    defaultMessage: 'Photoshop',
    description: 'content of skills',
  },
  skillsTag5: {
    id: 'content.skills.tag.5',
    defaultMessage: 'Photoshop',
    description: 'content of skills',
  },
  skillsTag6: {
    id: 'content.skills.tag.6',
    defaultMessage: 'Photoshop',
    description: 'content of skills',
  },
  skillsTag7: {
    id: 'content.skills.tag.7',
    defaultMessage: 'Photoshop',
    description: 'content of skills',
  },
  skillsTag8: {
    id: 'content.skills.tag.8',
    defaultMessage: 'Photoshop',
    description: 'content of skills',
  },
  skillsTag9: {
    id: 'content.skills.tag.9',
    defaultMessage: 'Photoshop',
    description: 'content of skills',
  },
  skillsTag10: {
    id: 'content.skills.tag.10',
    defaultMessage: 'Photoshop',
    description: 'content of skills',
  },
  skillsTag11: {
    id: 'content.skills.tag.11',
    defaultMessage: 'Photoshop',
    description: 'content of skills',
  },
  skillsTag12: {
    id: 'content.skills.tag.12',
    defaultMessage: 'Photoshop',
    description: 'content of skills',
  },
  skillsTag13: {
    id: 'content.skills.tag.13',
    defaultMessage: 'Photoshop',
    description: 'content of skills',
  },
  skillsTag14: {
    id: 'content.skills.tag.14',
    defaultMessage: 'Photoshop',
    description: 'content of skills',
  },
  skillsTag15: {
    id: 'content.skills.tag.15',
    defaultMessage: 'Photoshop',
    description: 'content of skills',
  },
});

class Articles extends Component {
  static propTypes = {
    isLinksShowed: PropTypes.bool.isRequired,
    setSkillsDomInfo: PropTypes.func.isRequired,
  };

  handleSkillsEnter() {
    this.props.setSkillsDomInfo({
      isLinksShowed: true,
    });
  }

  render() {
    return (
      <div className={s.root}>
        <article className={s.articlePanel}>
          <h2 className={s.articleTitle}>
            <FormattedMessage {...messages.aboutmeTitle} />
          </h2>
          <p className={s.p}>
            <FormattedMessage {...messages.aboutmeDesc} />
          </p>
          <dl className={s.dl}>
            <dd className={s.dd}><FormattedMessage {...messages.aboutmeSummary1} /></dd>
            <dd className={s.dd}><FormattedMessage {...messages.aboutmeSummary2} /></dd>
            <dd className={s.dd}><FormattedMessage {...messages.aboutmeSummary3} /></dd>
            <dd className={s.dd}><FormattedMessage {...messages.aboutmeSummary4} /></dd>
          </dl>
          <h3 className={s.articleH3}><FormattedMessage {...messages.aboutmeLanguageTitle} /></h3>
          <p className={s.p}>
            <img className={s.img} src={languageUrl} alt="languages" />
          </p>
        </article> {/* 关于本人 end */}
        <article className={s.articlePanel}>
          <a name="education">
            <h2 className={s.articleTitle}>
              <FormattedMessage {...messages.educationTitle} />
            </h2>
          </a>
          <h3 className={s.articleH3}>
            <FormattedMessage {...messages.educationNo1SchoolName} />
            <small className={s.articleH3Sub}>
              <FormattedMessage {...messages.educationNo1StartTime} />
              <FormattedMessage {...messages.timeSplit} />
              <FormattedMessage {...messages.educationNo1Endtime} />
            </small>
          </h3>
          <p className={s.p}>
            <FormattedMessage {...messages.educationNo1Desc} />
          </p>
        </article> {/* 教育经历 end */}
        <article className={s.articlePanel}>
          <a name="work-exprience">
            <h2 className={s.articleTitle}><FormattedMessage {...messages.workTitle} /></h2>
          </a>
          <h3 className={s.articleH3}>
            <FormattedMessage {...messages.workNo1Company} />
            <small className={s.articleH3Sub}>
              <FormattedMessage {...messages.workNo1Starttime} />
              <FormattedMessage {...messages.timeSplit} />
              <FormattedMessage {...messages.workNo1Endtime} />
            </small>
          </h3>
          <p className={s.p}><FormattedMessage {...messages.workNo1Job} /></p>
          <p className={s.p}>
            <FormattedMessage {...messages.workNo1Desc} />
          </p>
          <dl className={s.dl}>
            <dd className={s.dd}><FormattedMessage {...messages.workNo1Summary1} /></dd>
            <dd className={s.dd}><FormattedMessage {...messages.workNo1Summary2} /></dd>
            <dd className={s.dd}><FormattedMessage {...messages.workNo1Summary3} /></dd>
            <dd className={s.dd}><FormattedMessage {...messages.workNo1Summary4} /></dd>
            <dt />
          </dl>
          <p className={s.p}>
            <img className={s.img} src={work01Url} alt="" />
          </p>
          <h3 className={s.articleH3}>TamTam Srl.
            <small className={s.articleH3Sub}>2012 to 2013 </small>
          </h3>
          <p className={s.p}>Webdesigner</p>
          <p className={s.p}>
            Contracting position for an advertising agency based in Catania Italy.
            In charge of conceptualizing and build unique digital pieces alongside fellow team
            members. During this time I had the opportunity to direct projects involving many facets
            of design including brand identity, stationery, print advertising, websites and
            e-commerces for leading italian brands.
          </p>
          <dl className={s.dl}>
            <dd className={s.dd}>Main responsibilities also include:</dd>
            <dd className={s.dd}>Meeting client for brief, project presentation and retention;</dd>
            <dd className={s.dd}>Organise brainstorming sessions and quick group trainings;</dd>
            <dd className={s.dd}>Follow up and support developers and software engineers during the
            whole project life-cycle;</dd>
            <dd className={s.dd}>Deliver projects to strict deadlines.</dd>
          </dl>
          <p className={s.p}>
            <img className={s.img} src={work02Url} alt="" />
          </p>
          <h3 className={s.articleH3}>Freelance UX Designer &amp; Consultant
            <small className={s.articleH3Sub}>2009 to present</small>
          </h3>
          <p className={s.p}>
            Working mostly with worldwide entrepreneurs and startups. Running your
            own business requires not only a lot of self-motivation, commitment and discipline but
            also complementary abilities I had to master to stand out in a crowded market. Being a
            freelancer means wearing many different hats: from accounting and other administrative
            duties to marketing, business development, customer service... the list goes on.
          </p>
          <dl className={s.dl}>
            <dd className={s.dd}>Other positive aspects gained by being my own boss:</dd>
            <dd className={s.dd}>Sharper communication skills and self-control;</dd>
            <dd className={s.dd}>Sensibility to identify customer’s real needs;</dd>
            <dd className={s.dd}>Enhanced troubleshooting performance;</dd>
            <dd className={s.dd}>Stronger entrepreneurial conduct.</dd>
          </dl>
          <p className={s.p}>
            <img className={s.img} src={work03Url} alt="" />
          </p>
        </article> {/* 项目经验 end */}
        <article className={s.articlePanel}>
          <a name="skills">
            <h2 className={s.articleTitle}><FormattedMessage {...messages.skillsTitle} /></h2>
          </a>
          <p className={s.p}>
            <span className={s.tag}><FormattedMessage {...messages.skillsTag1} /></span>
            <span className={s.tag}><FormattedMessage {...messages.skillsTag2} /></span>
            <span className={s.tag}><FormattedMessage {...messages.skillsTag3} /></span>
            <span className={s.tag}><FormattedMessage {...messages.skillsTag4} /></span>
            <span className={s.tag}><FormattedMessage {...messages.skillsTag5} /></span>
            <span className={s.tag}><FormattedMessage {...messages.skillsTag6} /></span>
            <span className={s.tag}><FormattedMessage {...messages.skillsTag7} /></span>
            <span className={s.tag}><FormattedMessage {...messages.skillsTag8} /></span>
            <span className={s.tag}><FormattedMessage {...messages.skillsTag9} /></span>
            <span className={s.tag}><FormattedMessage {...messages.skillsTag10} /></span>
            <span className={s.tag}><FormattedMessage {...messages.skillsTag11} /></span>
            <span className={s.tag}><FormattedMessage {...messages.skillsTag12} /></span>
            <span className={s.tag}><FormattedMessage {...messages.skillsTag13} /></span>
            <span className={s.tag}><FormattedMessage {...messages.skillsTag14} /></span>
            <span className={s.tag}><FormattedMessage {...messages.skillsTag15} /></span>
          </p>
        </article> {/* 专业技能 end */}
        <Waypoint
          onEnter={this.handleSkillsEnter.bind(this)}
        />
      </div>
    );
  }
}

const mapState = (state) => ({
  isLinksShowed: state.dominfo.isLinksShowed,
});

const mapDispatch = {
  setSkillsDomInfo,
};

const EnhancedArticles = connect(mapState, mapDispatch)(Articles);

export default injectIntl(withStyles(s)(EnhancedArticles));
