import tensorflow as tf

model = tf.keras.models.load_model("fut.h5")
sess = tf.keras.backend.get_session()
tf.saved_model.simple_save(sess, './1', inputs={'stats': model.inputs[1], 'position': model.inputs[0]}, outputs={output.name: output for output in model.outputs})
