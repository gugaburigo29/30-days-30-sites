import React from 'react'
import PropTypes from 'prop-types'

const Col = props => {
    const colLg = props.colLg ? `col-lg-${props.colLg}` : '';
    const colMd = props.colMd ? `col-md-${props.colMd}` : '';
    const colSm = props.colSm ? `col-${props.colSm}` : '';
    const classes = `${colLg} ${colMd} ${colSm}`;

    return (
        <div className={classes}>
            {props.children}
        </div>
    )
}


Col.propTypes = {
    colLg: PropTypes.string || PropTypes.number,
    colMd: PropTypes.string || PropTypes.number,
    colSm: PropTypes.string || PropTypes.number,
}

export default Col;
