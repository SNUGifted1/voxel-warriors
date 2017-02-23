exports.accelerometerReceiver = function(){
    var args = argument.slice();
    /* args[0]: X
     * args[1]: Y
     * args[2]: Z
     * 나머지는 0
     */
};
exports.batteryReceiver = function(){
    var args = argument.slice();
    /* args[0]: 충전량 %
     * args[1]: 밀리볼트
     * args[2]: 온도(C)
     * 나머지는 0
     */
};
exports.drl_refReceiver = function(){
    var args = argument.slice();
    /* args[0]: DRL 센서
     * args[1]: REF 센서
     * 이 센서가 뭔지 아시는 분 댓글좀요
     * 나머지는 0
     */
};
exports.gyroReceiver = function(){
    var args = argument.slice();
    /* args[0]: X
     * args[1]: Y
     * args[2]: Z
     * 나머지는 0
     */
};
exports.eegReceiver = function(){
    var args = argument.slice();
    var type = args[0];
    args.splice(0, 1);
    /* type: 데이터 타입
     * args[0]: 왼쪽 귀
     * args[1]: 왼쪽 이마
     * args[2]: 오른쪽 이마
     * args[3]: 오른쪽 귀
     * args[4]: 왼쪽 보조 (?)
     * args[5]: 오른쪽 보조(?)
     * 라곤 하지만 타입에 따라 달라질 듯?
     * 나머지는 0
     */
};
