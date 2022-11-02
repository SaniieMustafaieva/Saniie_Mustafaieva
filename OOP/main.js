fileSystem = new FileSystem();
folderA = new Folder("/a/b/c");
fileSystem.save(folderA);

fileA = new File("FileContent", "/a/b/c/file_name.txt");
fileSystem.save(fileA);
folderA.list("/a/b/c")
