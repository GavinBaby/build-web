/**
 * Created by Administrator on 2015/12/17.
 */
var buildTransport = new Thrift.Transport("/build");
var buildProtocol  = new Thrift.Protocol(buildTransport);
var buildClient    = new buildSvcClient(buildProtocol);

