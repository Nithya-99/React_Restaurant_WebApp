import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Footer.css'
class Footer extends React.Component {
    render() {
        return (
            <footer className="page-footer font-small fixed-bottom">
                <div className="text-center py-3 contact" ><b>Contact:</b>
                    <a data-testid="phn"> +91 9768304455</a> <br/>
                    <b>Address:</b>
                    <a data-testid="address"> 1st Floor, ATL Corporate Park, Saki Vihar Rd, Powai, Mumbai, Maharashtra 400072</a>
                </div>
            </footer>
        )
    }
}
export default Footer;