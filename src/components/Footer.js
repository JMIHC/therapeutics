import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">Design by: <a href="https://html5up.net">HTML5 UP</a>. Brought to you by: <a href="https://cosmicfisherman.tech">Cosmic Fisherman</a>.</p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
