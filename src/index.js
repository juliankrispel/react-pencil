#!/usr/bin/env node
import program from "commander";
import findRoot from "find-root";
import path from "path";

program.version("0.0.1").usage("[options] <file ...>").parse(process.argv);

const modulePath = program.args[0];

console.log(path.join(process.cwd(), modulePath));

//findRoot(modulePath);
