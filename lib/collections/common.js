/*
  In this example, we've defined a FS.Collection named "images",
  which will be a new collection in your MongoDB database with
  the name "cfs.images.filerecord". We've also told it to use the
  filesystem storage adataper and store the files in ~/uploads on
  the local filesystem. If you don't specify a path, a cfs/files
  folder in your app container (bundle directory) will be used.
*/



var createThumb = function(fileObj, readStream, writeStream) {
  // Transform the image into a 10x10px thumbnail
  gm(readStream, fileObj.name()).resize('80', '80').stream().pipe(writeStream);
};

var createAvatar = function(fileObj, readStream, writeStream) {
  // Transform the image into a 10x10px thumbnail
  gm(readStream, fileObj.name()).resize('280', '280').stream().pipe(writeStream);
};


Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images", {path: '~/uploads'})]
});
