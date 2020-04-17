// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
// *
// Company entity related messages.
//
// This file is resposible for all operation related to company entity.
'use strict';
var grpc = require('grpc');
var service_pb = require('./service_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');

function serialize_company_Company(arg) {
  if (!(arg instanceof service_pb.Company)) {
    throw new Error('Expected argument of type company.Company');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_company_Company(buffer_arg) {
  return service_pb.Company.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_company_CompanyAllResponse(arg) {
  if (!(arg instanceof service_pb.CompanyAllResponse)) {
    throw new Error('Expected argument of type company.CompanyAllResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_company_CompanyAllResponse(buffer_arg) {
  return service_pb.CompanyAllResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_company_Empty(arg) {
  if (!(arg instanceof service_pb.Empty)) {
    throw new Error('Expected argument of type company.Empty');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_company_Empty(buffer_arg) {
  return service_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_company_HealthCheckRequest(arg) {
  if (!(arg instanceof service_pb.HealthCheckRequest)) {
    throw new Error('Expected argument of type company.HealthCheckRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_company_HealthCheckRequest(buffer_arg) {
  return service_pb.HealthCheckRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_company_HealthCheckResponse(arg) {
  if (!(arg instanceof service_pb.HealthCheckResponse)) {
    throw new Error('Expected argument of type company.HealthCheckResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_company_HealthCheckResponse(buffer_arg) {
  return service_pb.HealthCheckResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_company_Id(arg) {
  if (!(arg instanceof service_pb.Id)) {
    throw new Error('Expected argument of type company.Id');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_company_Id(buffer_arg) {
  return service_pb.Id.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_company_Pagination(arg) {
  if (!(arg instanceof service_pb.Pagination)) {
    throw new Error('Expected argument of type company.Pagination');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_company_Pagination(buffer_arg) {
  return service_pb.Pagination.deserializeBinary(new Uint8Array(buffer_arg));
}


var CompanyServiceService = exports.CompanyServiceService = {
  createCompany: {
    path: '/company.CompanyService/CreateCompany',
    requestStream: false,
    responseStream: false,
    requestType: service_pb.Company,
    responseType: service_pb.Id,
    requestSerialize: serialize_company_Company,
    requestDeserialize: deserialize_company_Company,
    responseSerialize: serialize_company_Id,
    responseDeserialize: deserialize_company_Id,
  },
  readAllCompanies: {
    path: '/company.CompanyService/ReadAllCompanies',
    requestStream: false,
    responseStream: false,
    requestType: service_pb.Pagination,
    responseType: service_pb.CompanyAllResponse,
    requestSerialize: serialize_company_Pagination,
    requestDeserialize: deserialize_company_Pagination,
    responseSerialize: serialize_company_CompanyAllResponse,
    responseDeserialize: deserialize_company_CompanyAllResponse,
  },
  readCompanies: {
    path: '/company.CompanyService/ReadCompanies',
    requestStream: false,
    responseStream: true,
    requestType: service_pb.Empty,
    responseType: service_pb.Company,
    requestSerialize: serialize_company_Empty,
    requestDeserialize: deserialize_company_Empty,
    responseSerialize: serialize_company_Company,
    responseDeserialize: deserialize_company_Company,
  },
  readCompany: {
    path: '/company.CompanyService/ReadCompany',
    requestStream: false,
    responseStream: false,
    requestType: service_pb.Id,
    responseType: service_pb.Company,
    requestSerialize: serialize_company_Id,
    requestDeserialize: deserialize_company_Id,
    responseSerialize: serialize_company_Company,
    responseDeserialize: deserialize_company_Company,
  },
  updateCompany: {
    path: '/company.CompanyService/UpdateCompany',
    requestStream: false,
    responseStream: false,
    requestType: service_pb.Company,
    responseType: service_pb.Id,
    requestSerialize: serialize_company_Company,
    requestDeserialize: deserialize_company_Company,
    responseSerialize: serialize_company_Id,
    responseDeserialize: deserialize_company_Id,
  },
  deleteCompany: {
    path: '/company.CompanyService/DeleteCompany',
    requestStream: false,
    responseStream: false,
    requestType: service_pb.Id,
    responseType: service_pb.Id,
    requestSerialize: serialize_company_Id,
    requestDeserialize: deserialize_company_Id,
    responseSerialize: serialize_company_Id,
    responseDeserialize: deserialize_company_Id,
  },
  check: {
    path: '/company.CompanyService/Check',
    requestStream: false,
    responseStream: false,
    requestType: service_pb.HealthCheckRequest,
    responseType: service_pb.HealthCheckResponse,
    requestSerialize: serialize_company_HealthCheckRequest,
    requestDeserialize: deserialize_company_HealthCheckRequest,
    responseSerialize: serialize_company_HealthCheckResponse,
    responseDeserialize: deserialize_company_HealthCheckResponse,
  },
  watch: {
    path: '/company.CompanyService/Watch',
    requestStream: false,
    responseStream: true,
    requestType: service_pb.HealthCheckRequest,
    responseType: service_pb.HealthCheckResponse,
    requestSerialize: serialize_company_HealthCheckRequest,
    requestDeserialize: deserialize_company_HealthCheckRequest,
    responseSerialize: serialize_company_HealthCheckResponse,
    responseDeserialize: deserialize_company_HealthCheckResponse,
  },
};

exports.CompanyServiceClient = grpc.makeGenericClientConstructor(CompanyServiceService);
