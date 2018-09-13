#!/usr/bin/env node
/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Dolittle. All rights reserved.
 *  Licensed under the MIT License. See LICENSE in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
import args from 'args';
const USAGE = 'dolittle create [command] [args]'
args
    .command('application', 'An application')
    .command('boundedcontext', 'A bounded context')
    .command('command', 'A command')
    .command('event', 'An event')
    .command('readmodel', 'A read model')
    .command('aggregateroot', 'An aggregate root');
    
    args.parse(process.argv, {value: global.usagePrefix + USAGE, name: 'dolittle create'});

if( !args.sub.length ) args.showHelp();