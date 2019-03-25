import tensorflow as tf

model = tf.keras.models.load_model("fut.h5")
sess = tf.keras.backend.get_session()
tf.saved_model.simple_save(sess, './', inputs={'stats': model.input}, outputs={output.name: output for output in model.outputs})