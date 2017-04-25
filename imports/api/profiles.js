/**
 * Created by austinbrown on 4/25/17.
 */
import {Mongo} from 'meteor/mongo'

const Profiles = new Mongo.Collection('profiles');

export default Profiles;