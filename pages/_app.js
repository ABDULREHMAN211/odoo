import '../public/css/bootstrap.min.css';
import '../public/css/animate.css';
import '../public/css/boxicons.min.css';
import '../public/css/flaticon.css';
import '../node_modules/react-modal-video/css/modal-video.min.css';
import 'react-accessible-accordion/dist/fancy-example.css';
import '../public/css/style.css';
import '../public/css/responsive.css';
import '../public/css/qform.module.css';
import 'antd/dist/antd.css';

import 'react-quill/dist/quill.snow.css'

import App from 'next/app';
import { DefaultSeo } from 'next-seo';
import Loader from '../components/Shared/Loader';
import GoTop from '../components/Shared/GoTop';

export default class MyApp extends App {
    static async getInitialProps ({ Component, ctx }) {
        return {
            pageProps: Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {}
        }
    }

    // Preloader
    state = {
        loading: true
    };
    componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 2000); 
    }
    componentWillUnmount() {
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = 0;
        }
    }
    
    render () {
        const { Component, pageProps } = this.props

        return (
            <React.Fragment>
                <DefaultSeo
                    title="OdooAI - Building world class IT solutions."
                    description=""
                    openGraph={{
                        type: 'website',
                        locale: 'en_IE',
                        url: 'https://odoo-ai/',
                        site_name: 'OdooAI - Building world class IT solutions.',
                    }}
                />

                <Component {...pageProps} />
                
                {/* Preloader */}
                <Loader loading={this.state.loading} />

                {/* Go Top Button */}
                <GoTop scrollStepInPx="100" delayInMs="10.50" />
            </React.Fragment>
        );
    }
}