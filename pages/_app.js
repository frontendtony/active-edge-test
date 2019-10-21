import axios from 'axios';
import AppLayout from 'layout';
import App from 'next/app';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import React from 'react';

axios.defaults.baseURL = 'http://35.195.51.39:8030';

const showProgressBar = delay => {
  const timer = setTimeout(() => NProgress.start(), delay);
  Router.events.on('routeChangeComplete', () => stopProgress(timer));
  Router.events.on('routeChangeError', () => stopProgress(timer));
};

const stopProgress = timer => {
  clearTimeout(timer);
  NProgress.done();
};

Router.events.on('routeChangeStart', () => showProgressBar(300));

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

    return (
      <AppLayout>
        <Head>
          <title>Chocolate City</title>
        </Head>
        <Component {...pageProps} />
      </AppLayout>
    );
  }
}

export default MyApp;
