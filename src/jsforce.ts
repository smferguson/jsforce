/**
 *
 */
import Apex from './api/apex';
import ConnectionCore from './connection';
import jsforce, { OAuth2, Date, SfDate, VERSION } from './core';
import { Schema } from './types';

export { OAuth2, Date, SfDate, VERSION };

export class Connection<S extends Schema = Schema> extends ConnectionCore<S> {
  apex: Apex<S> = new Apex(this);
}

jsforce.Connection = Connection;

export default jsforce;
