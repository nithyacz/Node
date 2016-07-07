# Node

fetchFiles.js :

Script file to get directory structure for desired depth
Parameters: filename, depth
eg sudo nodejs fetchFiles.js . 1
Sample output:

ubunduNithya@ubunduVM:~/displayFiles/controller/sampleDir1$ sudo nodejs fetchFiles.js . 1
{ path: '.',
  name: '.',
  type: 'folder',
  children:
   [ undefined,
     undefined,
     undefined,
     undefined,
     undefined,
     undefined,
     undefined ] }
ubunduNithya@ubunduVM:~/displayFiles/controller/sampleDir1$ sudo nodejs fetchFiles.js . 2
{ path: '.',
  name: '.',
  type: 'folder',
  children:
   [ { path: './Nested',
       name: 'Nested',
       type: 'folder',
       children: [ undefined, undefined ] },
     { path: './dir1', name: 'dir1', type: 'folder', children: [] },
     { path: './dir2',
       name: 'dir2',
       type: 'folder',
       children: [ undefined, undefined ] },
     { path: './fetchFiles.js', name: 'fetchFiles.js', type: 'file' },
     { path: './sampleFile.txt',
       name: 'sampleFile.txt',
       type: 'file' },
     { path: './temp.js', name: 'temp.js', type: 'file' },
     { path: './temp1.js', name: 'temp1.js', type: 'file' } ] }
ubunduNithya@ubunduVM:~/displayFiles/controller/sampleDir1$ sudo nodejs fetchFiles.js . 3
{ path: '.',
  name: '.',
  type: 'folder',
  children:
   [ { path: './Nested',
       name: 'Nested',
       type: 'folder',
       children:
        [ { path: './Nested/n1',
            name: 'n1',
            type: 'folder',
            children: [ undefined ] },
          { path: './Nested/temp.js', name: 'temp.js', type: 'file' } ] },
     { path: './dir1', name: 'dir1', type: 'folder', children: [] },
     { path: './dir2',
       name: 'dir2',
       type: 'folder',
       children:
        [ { path: './dir2/ddd.js', name: 'ddd.js', type: 'file' },
          { path: './dir2/test.txt', name: 'test.txt', type: 'file' } ] },
     { path: './fetchFiles.js', name: 'fetchFiles.js', type: 'file' },
     { path: './sampleFile.txt',
       name: 'sampleFile.txt',
       type: 'file' },
     { path: './temp.js', name: 'temp.js', type: 'file' },
     { path: './temp1.js', name: 'temp1.js', type: 'file' } ] }
ubunduNithya@ubunduVM:~/displayFiles/controller/sampleDir1$

