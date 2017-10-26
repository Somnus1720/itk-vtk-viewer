(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function isPromise(o){return!!o&&("object"==typeof o||"function"==typeof o)&&"function"==typeof o.then}module.exports=isPromise;
},{}],2:[function(require,module,exports){
"use strict";function registerPromiseWorker(e){function r(e,r,s,n){function t(r,s){"function"!=typeof self.postMessage?e.ports[0].postMessage(r,s):self.postMessage(r,s)}s?("undefined"!=typeof console&&"error"in console&&console.error("Worker caught an error:",s),t([r,{message:s.message}])):n instanceof i?t([r,null,n.message],n.transferList):t([r,null,n])}function s(e,r){try{return{res:e(r,n)}}catch(e){return{err:e}}}function n(e,r){return new i(e,r)}function t(e,n,t,o){var i=s(n,o);i.err?r(e,t,i.err):isPromise(i.res)?i.res.then(function(s){r(e,t,null,s)},function(s){r(e,t,s)}):r(e,t,null,i.res)}function o(s){var n=s.data;if(Array.isArray(n)&&2===n.length){var o=n[0],i=n[1];"function"!=typeof e?r(s,o,new Error("Please pass a function into register().")):t(s,e,o,i)}}function i(e,r){this.message=e,this.transferList=r}self.addEventListener("message",o)}var isPromise=require("is-promise");module.exports=registerPromiseWorker;
},{"is-promise":1}],3:[function(require,module,exports){
"use strict";var Float32="float",Float64="double",SpacePrecisionType="double";module.exports={Float32:Float32,Float64:Float64,SpacePrecisionType:SpacePrecisionType};

},{}],4:[function(require,module,exports){
"use strict";var ImageType=require("./ImageType.js"),Matrix=require("./Matrix.js"),Image=function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new ImageType;this.imageType=i;var e=i.dimension;this.origin=new Array(e),this.origin.fill(0),this.spacing=new Array(e),this.spacing.fill(1),this.direction=new Matrix(e,e),this.direction.setIdentity(),this.size=new Array(e),this.size.fill(0),this.data=new ArrayBuffer(0)};module.exports=Image;

},{"./ImageType.js":6,"./Matrix.js":8}],5:[function(require,module,exports){
"use strict";var ImageIOIndex=["itkPNGImageIOJSBinding","itkMetaImageIOJSBinding","itkGDCMImageIOJSBinding","itkTIFFImageIOJSBinding","itkNiftiImageIOJSBinding","itkJPEGImageIOJSBinding","itkNrrdImageIOJSBinding","itkVTKImageIOJSBinding","itkBMPImageIOJSBinding","itkHDF5ImageIOJSBinding","itkMINCImageIOJSBinding","itkMRCImageIOJSBinding","itkLSMImageIOJSBinding","itkMGHImageIOJSBinding","itkBioRadImageIOJSBinding","itkGiplImageIOJSBinding","itkGEAdwImageIOJSBinding","itkGE4ImageIOJSBinding","itkGE5ImageIOJSBinding"];module.exports=ImageIOIndex;

},{}],6:[function(require,module,exports){
"use strict";var IntTypes=require("./IntTypes.js"),PixelTypes=require("./PixelTypes.js"),ImageType=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:2,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:IntTypes.UInt8,t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:PixelTypes.Scalar,s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1;this.dimension=e,this.componentType=i,this.pixelType=t,this.components=s};module.exports=ImageType;

},{"./IntTypes.js":7,"./PixelTypes.js":10}],7:[function(require,module,exports){
"use strict";var Int8="int8_t",UInt8="uint8_t",Int16="int16_t",UInt16="uint16_t",Int32="int32_t",UInt32="uint32_t",Int64="int64_t",UInt64="uint64_t",SizeValueType=UInt64,IdentifierType=SizeValueType,IndexValueType=Int64,OffsetValueType=Int64;module.exports={Int8:Int8,UInt8:UInt8,Int16:Int16,UInt16:UInt16,Int32:Int32,UInt32:UInt32,Int64:Int64,UInt64:UInt64,SizeValueType:SizeValueType,IdentifierType:IdentifierType,IndexValueType:IndexValueType,OffsetValueType:OffsetValueType};

},{}],8:[function(require,module,exports){
"use strict";function Matrix(t,s){if(t instanceof Matrix){var i=t;this.rows=i.rows,this.columns=i.columns,this.data=i.data.slice()}else this.rows=t,this.columns=s,this.data=new Array(t*s),this.data.fill(0)}Matrix.prototype.setIdentity=function(){for(var t=0;t<this.rows;++t)for(var s=0;s<this.columns;++s)this.data[s+t*this.columns]=t===s?1:0},Matrix.prototype.setElement=function(t,s,i){this.data[s+t*this.columns]=i},Matrix.prototype.getElement=function(t,s){return this.data[s+t*this.columns]},module.exports=Matrix;

},{}],9:[function(require,module,exports){
"use strict";var mimeToIO={};mimeToIO["image/jpeg"]="itkJPEGImageIOJSBinding",mimeToIO["image/png"]="itkPNGImageIOJSBinding",mimeToIO["image/tiff"]="itkTIFFImageIOJSBinding",mimeToIO["image/x-ms-bmp"]="itkBMPImageIOJSBinding",mimeToIO["image/x-bmp"]="itkBMPImageIOJSBinding",mimeToIO["image/bmp"]="itkBMPImageIOJSBinding",mimeToIO["application/dicom"]="itkGDCMImageIOJSBinding",module.exports=mimeToIO;

},{}],10:[function(require,module,exports){
"use strict";var Unknown=0,Scalar=1,RGB=2,RGBA=3,Offset=4,Vector=5,Point=6,CovariantVector=7,SymmetricSecondRankTensor=8,DiffusionTensor3D=9,Complex=10,FixedArray=11,Matrix=12;module.exports={Unknown:Unknown,Scalar:Scalar,RGB:RGB,RGBA:RGBA,Offset:Offset,Vector:Vector,Point:Point,CovariantVector:CovariantVector,SymmetricSecondRankTensor:SymmetricSecondRankTensor,DiffusionTensor3D:DiffusionTensor3D,Complex:Complex,FixedArray:FixedArray,Matrix:Matrix};

},{}],11:[function(require,module,exports){
"use strict";var _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},registerPromiseWorker=require("promise-worker-transferable/register"),ImageType=require("../ImageType.js"),Image=require("../Image.js"),mimeToIO=require("../MimeToIO.js"),getFileExtension=require("../getFileExtension.js"),extensionToIO=require("../extensionToIO.js"),ImageIOIndex=require("../ImageIOIndex.js"),readImageEmscriptenFSFile=require("../readImageEmscriptenFSFile.js"),writeImageEmscriptenFSFile=require("../writeImageEmscriptenFSFile.js"),generateModulePath=function(e,o){var r=e+"/"+o+".js";return"object"===("undefined"==typeof WebAssembly?"undefined":_typeof(WebAssembly))&&"function"==typeof WebAssembly.Memory&&(r=e+"/"+o+"Wasm.js"),r},ioToModule={},readImage=function(e,o){var r=getFileExtension(e.name),n=null;if(mimeToIO.hasOwnProperty(e.type))n=mimeToIO[e.type];else if(extensionToIO.hasOwnProperty(r))n=extensionToIO[r];else for(var i=0;i<ImageIOIndex.length;++i){var t=null,a=ImageIOIndex[i];if(a in ioToModule)t=ioToModule[a];else{var l=generateModulePath(e.config.imageIOsPath,a);importScripts(l),ioToModule[a]=Module,t=Module}var m=new t.ITKImageIO,u=new Blob([e.data]),s=[{name:e.name,data:u}];t.mountBlobs("/work",s);var I="/work/"+e.name;if(m.SetFileName(I),m.CanReadFile(I)){n=a,t.unmountBlobs("/work");break}t.unmountBlobs("/work")}if(null===n)return new Error("Could not find IO for: "+e.name);var d=null;if(n in ioToModule)d=ioToModule[n];else{var f=generateModulePath(e.config.imageIOsPath,n);importScripts(f),ioToModule[n]=Module,d=Module}var g=new Blob([e.data]),p=[{name:e.name,data:g}];d.mountBlobs("/work",p);var y="/work/"+e.name,O=readImageEmscriptenFSFile(d,y);return d.unmountBlobs("/work"),o(O,[O.data.buffer])},writeImage=function(e,o){var r=getFileExtension(e.name),n=null;if(mimeToIO.hasOwnProperty(e.type))n=mimeToIO[e.type];else if(extensionToIO.hasOwnProperty(r))n=extensionToIO[r];else for(var i=0;i<ImageIOIndex.length;++i){var t=null,a=ImageIOIndex[i];if(a in ioToModule)t=ioToModule[a];else{var l=generateModulePath(e.config.imageIOsPath,a);importScripts(l),ioToModule[a]=Module,t=Module}var m=new t.ITKImageIO,u=d+"/"+e.name;if(m.SetFileName(u),m.CanWriteFile(u)){n=a;break}}if(null===n)return new Error("Could not find IO for: "+e.name);var s=null;if(n in ioToModule)s=ioToModule[n];else{var I=generateModulePath(e.config.imageIOsPath,n);importScripts(I),ioToModule[n]=Module,s=Module}var d="/work",f=d+"/"+e.name;s.mkdirs(d),writeImageEmscriptenFSFile(s,e.useCompression,e.image,f);var g=s.readFile(f,{encoding:"binary"});return o(g.buffer,[g.buffer])};registerPromiseWorker(function(e,o){return"readImage"===e.operation?readImage(e,o):"writeImage"===e.operation?writeImage(e,o):new Error("Unknown worker operation")});

},{"../Image.js":4,"../ImageIOIndex.js":5,"../ImageType.js":6,"../MimeToIO.js":9,"../extensionToIO.js":12,"../getFileExtension.js":13,"../readImageEmscriptenFSFile.js":15,"../writeImageEmscriptenFSFile.js":16,"promise-worker-transferable/register":2}],12:[function(require,module,exports){
"use strict";var extensionToIO={};extensionToIO.bmp="itkBMPImageIOJSBinding",extensionToIO.BMP="itkBMPImageIOJSBinding",extensionToIO.dcm="itkGDCMImageIOJSBinding",extensionToIO.DCM="itkGDCMImageIOJSBinding",extensionToIO.gipl="itkGiplImageIOJSBinding",extensionToIO["gipl.gz"]="itkGiplImageIOJSBinding",extensionToIO.hdf5="itkHDF5ImageIOJSBinding",extensionToIO.jpg="itkJPEGImageIOJSBinding",extensionToIO.JPG="itkJPEGImageIOJSBinding",extensionToIO.jpeg="itkJPEGImageIOJSBinding",extensionToIO.JPEG="itkJPEGImageIOJSBinding",extensionToIO.lsm="itkLSMImageIOJSBinding",extensionToIO.mnc="itkMINCImageIOJSBinding",extensionToIO.MNC="itkMINCImageIOJSBinding",extensionToIO["mnc.gz"]="itkMINCImageIOJSBinding",extensionToIO["MNC.GZ"]="itkMINCImageIOJSBinding",extensionToIO.mnc2="itkMINCImageIOJSBinding",extensionToIO.MNC2="itkMINCImageIOJSBinding",extensionToIO.mgh="itkMGHImageIOJSBinding",extensionToIO.mgz="itkMGHImageIOJSBinding",extensionToIO["mgh.gz"]="itkMGHImageIOJSBinding",extensionToIO.mha="itkMetaImageIOJSBinding",extensionToIO.mhd="itkMetaImageIOJSBinding",extensionToIO.mrc="itkMRCImageIOJSBinding",extensionToIO.nia="itkNiftiImageIOJSBinding",extensionToIO.nii="itkNiftiImageIOJSBinding",extensionToIO["nii.gz"]="itkNiftiImageIOJSBinding",extensionToIO.hdr="itkNiftiImageIOJSBinding",extensionToIO.nrrd="itkNrrdImageIOJSBinding",extensionToIO.NRRD="itkNrrdImageIOJSBinding",extensionToIO.nhdr="itkNrrdImageIOJSBinding",extensionToIO.NHDR="itkNrrdImageIOJSBinding",extensionToIO.png="itkPNGImageIOJSBinding",extensionToIO.PNG="itkPNGImageIOJSBinding",extensionToIO.pic="itkBioRadImageIOJSBinding",extensionToIO.PIC="itkBioRadImageIOJSBinding",extensionToIO.tif="itkTIFFImageIOJSBinding",extensionToIO.TIF="itkTIFFImageIOJSBinding",extensionToIO.tiff="itkTIFFImageIOJSBinding",extensionToIO.TIFF="itkTIFFImageIOJSBinding",extensionToIO.vtk="itkVTKImageIOJSBinding",extensionToIO.VTK="itkVTKImageIOJSBinding",module.exports=extensionToIO;

},{}],13:[function(require,module,exports){
"use strict";var getFileExtension=function(e){var t=e.slice(2+(e.lastIndexOf(".")-1>>>0));if("gz"===t.toLowerCase()){var s=e.slice(0,-3).lastIndexOf(".");t=e.slice(2+(s-1>>>0))}return t};module.exports=getFileExtension;

},{}],14:[function(require,module,exports){
"use strict";var getMatrixElement=function(t,e,r){return t.data[r+e*t.columns]};module.exports=getMatrixElement;

},{}],15:[function(require,module,exports){
"use strict";var Image=require("./Image.js"),ImageType=require("./ImageType.js"),IntTypes=require("./IntTypes.js"),FloatTypes=require("./FloatTypes.js"),PixelTypes=require("./PixelTypes.js"),Matrix=require("./Matrix.js"),readImageEmscriptenFSFile=function(e,p){var n=new e.ITKImageIO;if(n.SetFileName(p),!n.CanReadFile(p))throw new Error("Could not read file: "+p);n.ReadImageInformation();var i=n.GetNumberOfDimensions(),t=new ImageType(i);switch(n.GetComponentType()){case e.IOComponentType.UCHAR:t.componentType=IntTypes.UInt8;break;case e.IOComponentType.CHAR:t.componentType=IntTypes.Int8;break;case e.IOComponentType.USHORT:t.componentType=IntTypes.UInt16;break;case e.IOComponentType.SHORT:t.componentType=IntTypes.Int16;break;case e.IOComponentType.UINT:t.componentType=IntTypes.UInt32;break;case e.IOComponentType.INT:t.componentType=IntTypes.Int32;break;case e.IOComponentType.ULONG:t.componentType=IntTypes.UInt64;break;case e.IOComponentType.LONG:t.componentType=IntTypes.Int64;break;case e.IOComponentType.FLOAT:t.componentType=FloatTypes.Float32;break;case e.IOComponentType.DOUBLE:t.componentType=FloatTypes.Float64;break;default:throw new Error("Unknown IO component type")}switch(n.GetPixelType()){case e.IOPixelType.UNKNOWNPIXELTYPE:t.pixelType=PixelTypes.Unknown;break;case e.IOPixelType.SCALAR:t.pixelType=PixelTypes.Scalar;break;case e.IOPixelType.RGB:t.pixelType=PixelTypes.RGB;break;case e.IOPixelType.RGBA:t.pixelType=PixelTypes.RGBA;break;case e.IOPixelType.OFFSET:t.pixelType=PixelTypes.Offset;break;case e.IOPixelType.VECTOR:t.pixelType=PixelTypes.Vector;break;case e.IOPixelType.POINT:t.pixelType=PixelTypes.Point;break;case e.IOPixelType.COVARIANTVECTOR:t.pixelType=PixelTypes.CovariantVector;break;case e.IOPixelType.SYMMETRICSECONDRANKTENSOR:t.pixelType=PixelTypes.SymmetricSecondRankTensor;break;case e.IOPixelType.DIFFUSIONTENSOR3D:t.pixelType=PixelTypes.DiffusionTensor3D;break;case e.IOPixelType.COMPLEX:t.pixelType=PixelTypes.Complex;break;case e.IOPixelType.FIXEDARRAY:t.pixelType=PixelTypes.FixedArray;break;case e.IOPixelType.MATRIX:t.pixelType=PixelTypes.Matrix;break;default:throw new Error("Unknown IO pixel type")}t.components=n.GetNumberOfComponents();for(var a=new Image(t),T=new Matrix(i,i),o=0;o<i;++o)for(var r=n.GetDirection(o),s=0;s<i;++s)T.setElement(s,o,r.get(s));for(var y=0;y<a.imageType.dimension;++y)if(y<i){a.size[y]=n.GetDimensions(y),a.spacing[y]=n.GetSpacing(y),a.origin[y]=n.GetOrigin(y);for(var l=0;l<a.imageType.dimension;++l)if(l<i){var I=T.getElement(l,y);a.direction.setElement(l,y,I)}else a.direction.setElement(l,y,0)}else a.size[y]=0,a.spacing[y]=1,a.origin[y]=0,a.direction.setIdentity();for(var m=0;m<a.imageType.dimension;++m)if(a.spacing[m]<0){a.spacing[m]=-a.spacing[m];for(var c=0;c<a.imageType.dimension;++c)a.direction.setElement(m,c,-1*a.direction.getElement(m,c))}return a.data=n.Read(),a};module.exports=readImageEmscriptenFSFile;

},{"./FloatTypes.js":3,"./Image.js":4,"./ImageType.js":6,"./IntTypes.js":7,"./Matrix.js":8,"./PixelTypes.js":10}],16:[function(require,module,exports){
"use strict";var IntTypes=require("./IntTypes.js"),FloatTypes=require("./FloatTypes.js"),PixelTypes=require("./PixelTypes.js"),getMatrixElement=require("./getMatrixElement.js"),writeImageEmscriptenFSFile=function(e,t,p,n){var i=new e.ITKImageIO;if(i.SetFileName(n),!i.CanWriteFile(n))throw new Error("Could not write file: "+n);var T=p.imageType.dimension;switch(i.SetNumberOfDimensions(T),p.imageType.componentType){case IntTypes.UInt8:i.SetComponentType(e.IOComponentType.UCHAR);break;case IntTypes.Int8:i.SetComponentType(e.IOComponentType.CHAR);break;case IntTypes.UInt16:i.SetComponentType(e.IOComponentType.USHORT);break;case IntTypes.Int16:i.SetComponentType(e.IOComponentType.SHORT);break;case IntTypes.UInt32:i.SetComponentType(e.IOComponentType.UINT);break;case IntTypes.Int32:i.SetComponentType(e.IOComponentType.INT);break;case IntTypes.UInt64:i.SetComponentType(e.IOComponentType.ULONG);break;case IntTypes.Int64:i.SetComponentType(e.IOComponentType.LONG);break;case FloatTypes.Float32:i.SetComponentType(e.IOComponentType.FLOAT);break;case FloatTypes.Float64:i.SetComponentType(e.IOComponentType.DOUBLE);break;default:throw new Error("Unknown IO component type")}switch(p.imageType.pixelType){case PixelTypes.Unknown:i.SetPixelType(e.IOPixelType.UNKNOWNPIXELTYPE);break;case PixelTypes.Scalar:i.SetPixelType(e.IOPixelType.SCALAR);break;case PixelTypes.RGB:i.SetPixelType(e.IOPixelType.RGB);break;case PixelTypes.RGBA:i.SetPixelType(e.IOPixelType.RGBA);break;case PixelTypes.Offset:i.SetPixelType(e.IOPixelType.OFFSET);break;case PixelTypes.Vector:i.SetPixelType(e.IOPixelType.VECTOR);break;case PixelTypes.Point:i.SetPixelType(e.IOPixelType.POINT);break;case PixelTypes.CovariantVector:i.SetPixelType(e.IOPixelType.COVARIANTVECTOR);break;case PixelTypes.SymmetricSecondRankTensor:i.SetPixelType(e.IOPixelType.SYMMETRICSECONDRANKTENSOR);break;case PixelTypes.DiffusionTensor3D:i.SetPixelType(e.IOPixelType.DIFFUSIONTENSOR3D);break;case PixelTypes.Complex:i.SetPixelType(e.IOPixelType.COMPLEX);break;case PixelTypes.FixedArray:i.SetPixelType(e.IOPixelType.FIXEDARRAY);break;case PixelTypes.Matrix:i.SetPixelType(e.IOPixelType.MATRIX);break;default:throw new Error("Unknown IO pixel type")}i.SetNumberOfComponents(p.imageType.components);for(var a=0;a<T;++a){i.SetDimensions(a,p.size[a]),i.SetSpacing(a,p.spacing[a]),i.SetOrigin(a,p.origin[a]);var r=new e.AxisDirectionType;r.resize(T,0);for(var y=0;y<T;++y)r.set(y,getMatrixElement(p.direction,y,a));i.SetDirection(a,r)}i.SetUseCompression(t);var o=p.data.length*p.data.BYTES_PER_ELEMENT,s=e._malloc(o),l=new Uint8Array(e.HEAPU8.buffer,s,o);l.set(new Uint8Array(p.data.buffer)),i.Write(l.byteOffset),e._free(l.byteOffset)};module.exports=writeImageEmscriptenFSFile;

},{"./FloatTypes.js":3,"./IntTypes.js":7,"./PixelTypes.js":10,"./getMatrixElement.js":14}]},{},[11]);
