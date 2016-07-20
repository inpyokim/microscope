/**
 * Created by inpyokim on 2016. 7. 20..
 */
// check that the userId specified owns the documents
ownsDocument = function(userId, doc) {
    return doc && doc.userId === userId;
}