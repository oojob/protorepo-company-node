// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var service_pb = require('./service_pb.js');

function serialize_company_CreateCompanyReq(arg) {
  if (!(arg instanceof service_pb.CreateCompanyReq)) {
    throw new Error('Expected argument of type company.CreateCompanyReq');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_company_CreateCompanyReq(buffer_arg) {
  return service_pb.CreateCompanyReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_company_CreateCompanyRes(arg) {
  if (!(arg instanceof service_pb.CreateCompanyRes)) {
    throw new Error('Expected argument of type company.CreateCompanyRes');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_company_CreateCompanyRes(buffer_arg) {
  return service_pb.CreateCompanyRes.deserializeBinary(new Uint8Array(buffer_arg));
}


// *
// Service defination for company entity
var CompanyService = exports.CompanyService = {
  createCompany: {
    path: '/company.Company/CreateCompany',
    requestStream: false,
    responseStream: false,
    requestType: service_pb.CreateCompanyReq,
    responseType: service_pb.CreateCompanyRes,
    requestSerialize: serialize_company_CreateCompanyReq,
    requestDeserialize: deserialize_company_CreateCompanyReq,
    responseSerialize: serialize_company_CreateCompanyRes,
    responseDeserialize: deserialize_company_CreateCompanyRes,
  },
};

exports.CompanyClient = grpc.makeGenericClientConstructor(CompanyService);
