#!/usr/bin/env node
/*
Copyright (c) 2015, Nera Liu  All rights reserved.
Copyrights licensed under the New BSD License.
See the accompanying LICENSE file for terms.
*/
var path = require('path'),
    fs = require('fs'),
    lib = path.join(path.dirname(fs.realpathSync(__filename)), './src');
require(lib + '/agent.js');
