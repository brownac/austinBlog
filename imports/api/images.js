var imageStore = new FS.Store.S3("uploads", {
  accessKeyId: Meteor.settings.accessKeyId, 
  secretAccessKey: Meteor.settings.secretAccessKey,
  bucket: Meteor.settings.bucket 
});

var Images = new FS.Collection("uploads", {
  stores: [imageStore],
  filter: {
      allow: {
        contentTypes: ['image/*']
      }
    }
});

Images.allow({
  insert: function () {
    // add custom authentication code here
    return true;
  },
  update: function(){
    return true;
  },
  download: function(){
    return true;
  }
});

export default Images;
