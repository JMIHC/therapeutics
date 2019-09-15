import React from 'react'
import PropTypes from 'prop-types'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <p>
            Charles Cornyn has been doing therapeutic massage and energy healing
            for over 25 years.
          </p>
          <p>
            He has had his own practice in Northfield since 2007, specializing
            in the Neuromuscular Technique and Craniosacral Therapy for pain
            relief and wellness. Charles is a Licensed Massage Therapist (LMT)
            and studied at the Chicago School of Massage Therapy.
          </p>
          <p>
            Charles uses a wide variety of techniques and can tailor sessions
            for targeted therapeutic effect, relaxation, or a blend of both. He
            waits for inspiration to ensure he applies the appropriate
            technique, holding a neutral and attentive space without
            preconceived notions, which allows him to be open to whatever he
            finds.
          </p>
          <p>
            Charles has had effective results with tight muscles and ligaments,
            chronic muscle spasms, carpel tunnel syndrome, hip and leg pain,
            among other issues. His focus on overall well-being helps to ensure
            that whatever your source of pain, you will leave his office feeling
            refreshed.
          </p>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
