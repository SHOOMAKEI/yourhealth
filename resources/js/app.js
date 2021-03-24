require('./bootstrap');
import { App } from '@inertiajs/inertia-react'
import React from 'react'
import { render } from 'react-dom'
import { InertiaProgress } from '@inertiajs/progress'

InertiaProgress.init({
  // The delay after which the progress bar will
  // appear during navigation, in milliseconds.
  delay: 250,

  // The color of the progress bar.
  color: '#0acf97',

  // Whether to include the default NProgress styles.
  includeCSS: true,

  // Whether the NProgress spinner will be shown.
  showSpinner: false,
})


const el = document.getElementById('app')

render(
  <App
    initialPage={JSON.parse(el.dataset.page)}
    resolveComponent={name => import(`./Pages/${name}`).then(module => module.default)}
  />,
  el
)