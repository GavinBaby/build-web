/**
 * Created by Administrator on 2015/12/17.
 */
console.log(1)
var buildTransport = new Thrift.Transport("/build");
console.log(2)
var buildProtocol  = new Thrift.Protocol(buildTransport);
console.log(3)
var buildClient    = new buildSvcClient(buildProtocol);

