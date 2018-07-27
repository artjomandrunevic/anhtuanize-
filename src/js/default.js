'use strict'

import WDR from 'when-dom-ready'
import 'materialize-css/dist/js/materialize'

// navbar
WDR().then(() => {
    M.Sidenav.init($('#mobile-main-menu'))
})
