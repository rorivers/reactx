import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import Layout from '../../components/Layout';
import s from './Content.css';
import { getContent as getContentAction } from '../../actions/content';
import { selectContent } from '../../reducers/content';

class Content extends Component {
  static propTypes = {
    path: PropTypes.string.isRequired,
    locale: PropTypes.string.isRequired,
    content: PropTypes.shape({
      isFetching: PropTypes.bool.isRequired,
      title: PropTypes.string,
      content: PropTypes.string,
    }).isRequired,
    getContent: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.maybeFetchData();
  }

  componentWillUpdate(nextProps) {
    this.maybeFetchData(nextProps);
  }

  maybeFetchData(props) {
    const { path, locale, content, getContent } = props || this.props;
    if (!content) {
      getContent({ path, locale });
    }
  }

  render() {
    const { path, content } = this.props;
    return (
      <Layout>
        <div className={s.root}>
          {(!content || content.isFetching) ? (
            <div className={`${s.container} ${s.fetching}`}>
              {path !== '/' && <h1>...</h1>}
            </div>
          ) : (
            <div className={s.container}>
              {content.title && path !== '/' && <h1>{content.title}</h1>}
              <div dangerouslySetInnerHTML={{ __html: content.content }} />
            </div>
          )}
        </div>
      </Layout>
    );
  }
}

const mapState = (state, props) => ({
  content: selectContent(state, props),
});

const mapDispatch = {
  getContent: getContentAction,
};

const EnhancedContent = connect(mapState, mapDispatch)(Content);

export default withStyles(s)(EnhancedContent);
