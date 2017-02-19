var createThumb = (fileObj,readStream,writeStream)=>{
  var size = '175';
  gm(readStream).autoOrient().resize(size, size + '^').gravity('Center').extent(size, size).stream('PNG').pipe(writeStream);
}

var imageStore = new FS.Store.GridFS("images", {
  chunkSize: 1024*1024,  // optional, default GridFS chunk size in bytes (can be overridden per file).
  transformWrite : createThumb
});

var Images = new FS.Collection("images", {
  stores: [imageStore]
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
