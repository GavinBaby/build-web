/**
 * Autogenerated by Thrift Compiler (0.9.3)
 *
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
 *  @generated
 */
import org.apache.thrift.scheme.IScheme;
import org.apache.thrift.scheme.SchemeFactory;
import org.apache.thrift.scheme.StandardScheme;

import org.apache.thrift.scheme.TupleScheme;
import org.apache.thrift.protocol.TTupleProtocol;
import org.apache.thrift.protocol.TProtocolException;
import org.apache.thrift.EncodingUtils;
import org.apache.thrift.TException;
import org.apache.thrift.async.AsyncMethodCallback;
import org.apache.thrift.server.AbstractNonblockingServer.*;
import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;
import java.util.EnumMap;
import java.util.Set;
import java.util.HashSet;
import java.util.EnumSet;
import java.util.Collections;
import java.util.BitSet;
import java.nio.ByteBuffer;
import java.util.Arrays;
import javax.annotation.Generated;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@SuppressWarnings({"cast", "rawtypes", "serial", "unchecked"})
/**
 * 结果
 */
@Generated(value = "Autogenerated by Thrift Compiler (0.9.3)", date = "2017-01-25")
public class Back implements org.apache.thrift.TBase<Back, Back._Fields>, java.io.Serializable, Cloneable, Comparable<Back> {
  private static final org.apache.thrift.protocol.TStruct STRUCT_DESC = new org.apache.thrift.protocol.TStruct("Back");

  private static final org.apache.thrift.protocol.TField CODE_FIELD_DESC = new org.apache.thrift.protocol.TField("code", org.apache.thrift.protocol.TType.I32, (short)1);
  private static final org.apache.thrift.protocol.TField TEXT_FIELD_DESC = new org.apache.thrift.protocol.TField("text", org.apache.thrift.protocol.TType.STRING, (short)2);
  private static final org.apache.thrift.protocol.TField SPARE1_FIELD_DESC = new org.apache.thrift.protocol.TField("spare1", org.apache.thrift.protocol.TType.STRING, (short)3);
  private static final org.apache.thrift.protocol.TField SPARE2_FIELD_DESC = new org.apache.thrift.protocol.TField("spare2", org.apache.thrift.protocol.TType.STRING, (short)4);

  private static final Map<Class<? extends IScheme>, SchemeFactory> schemes = new HashMap<Class<? extends IScheme>, SchemeFactory>();
  static {
    schemes.put(StandardScheme.class, new BackStandardSchemeFactory());
    schemes.put(TupleScheme.class, new BackTupleSchemeFactory());
  }

  /**
   * 结果代码
   */
  public int code; // required
  /**
   * 结果说明
   */
  public String text; // required
  /**
   * 备用1
   */
  public String spare1; // required
  /**
   * 备用2
   */
  public String spare2; // required

  /** The set of fields this struct contains, along with convenience methods for finding and manipulating them. */
  public enum _Fields implements org.apache.thrift.TFieldIdEnum {
    /**
     * 结果代码
     */
    CODE((short)1, "code"),
    /**
     * 结果说明
     */
    TEXT((short)2, "text"),
    /**
     * 备用1
     */
    SPARE1((short)3, "spare1"),
    /**
     * 备用2
     */
    SPARE2((short)4, "spare2");

    private static final Map<String, _Fields> byName = new HashMap<String, _Fields>();

    static {
      for (_Fields field : EnumSet.allOf(_Fields.class)) {
        byName.put(field.getFieldName(), field);
      }
    }

    /**
     * Find the _Fields constant that matches fieldId, or null if its not found.
     */
    public static _Fields findByThriftId(int fieldId) {
      switch(fieldId) {
        case 1: // CODE
          return CODE;
        case 2: // TEXT
          return TEXT;
        case 3: // SPARE1
          return SPARE1;
        case 4: // SPARE2
          return SPARE2;
        default:
          return null;
      }
    }

    /**
     * Find the _Fields constant that matches fieldId, throwing an exception
     * if it is not found.
     */
    public static _Fields findByThriftIdOrThrow(int fieldId) {
      _Fields fields = findByThriftId(fieldId);
      if (fields == null) throw new IllegalArgumentException("Field " + fieldId + " doesn't exist!");
      return fields;
    }

    /**
     * Find the _Fields constant that matches name, or null if its not found.
     */
    public static _Fields findByName(String name) {
      return byName.get(name);
    }

    private final short _thriftId;
    private final String _fieldName;

    _Fields(short thriftId, String fieldName) {
      _thriftId = thriftId;
      _fieldName = fieldName;
    }

    public short getThriftFieldId() {
      return _thriftId;
    }

    public String getFieldName() {
      return _fieldName;
    }
  }

  // isset id assignments
  private static final int __CODE_ISSET_ID = 0;
  private byte __isset_bitfield = 0;
  public static final Map<_Fields, org.apache.thrift.meta_data.FieldMetaData> metaDataMap;
  static {
    Map<_Fields, org.apache.thrift.meta_data.FieldMetaData> tmpMap = new EnumMap<_Fields, org.apache.thrift.meta_data.FieldMetaData>(_Fields.class);
    tmpMap.put(_Fields.CODE, new org.apache.thrift.meta_data.FieldMetaData("code", org.apache.thrift.TFieldRequirementType.DEFAULT, 
        new org.apache.thrift.meta_data.FieldValueMetaData(org.apache.thrift.protocol.TType.I32)));
    tmpMap.put(_Fields.TEXT, new org.apache.thrift.meta_data.FieldMetaData("text", org.apache.thrift.TFieldRequirementType.DEFAULT, 
        new org.apache.thrift.meta_data.FieldValueMetaData(org.apache.thrift.protocol.TType.STRING)));
    tmpMap.put(_Fields.SPARE1, new org.apache.thrift.meta_data.FieldMetaData("spare1", org.apache.thrift.TFieldRequirementType.DEFAULT, 
        new org.apache.thrift.meta_data.FieldValueMetaData(org.apache.thrift.protocol.TType.STRING)));
    tmpMap.put(_Fields.SPARE2, new org.apache.thrift.meta_data.FieldMetaData("spare2", org.apache.thrift.TFieldRequirementType.DEFAULT, 
        new org.apache.thrift.meta_data.FieldValueMetaData(org.apache.thrift.protocol.TType.STRING)));
    metaDataMap = Collections.unmodifiableMap(tmpMap);
    org.apache.thrift.meta_data.FieldMetaData.addStructMetaDataMap(Back.class, metaDataMap);
  }

  public Back() {
  }

  public Back(
    int code,
    String text,
    String spare1,
    String spare2)
  {
    this();
    this.code = code;
    setCodeIsSet(true);
    this.text = text;
    this.spare1 = spare1;
    this.spare2 = spare2;
  }

  /**
   * Performs a deep copy on <i>other</i>.
   */
  public Back(Back other) {
    __isset_bitfield = other.__isset_bitfield;
    this.code = other.code;
    if (other.isSetText()) {
      this.text = other.text;
    }
    if (other.isSetSpare1()) {
      this.spare1 = other.spare1;
    }
    if (other.isSetSpare2()) {
      this.spare2 = other.spare2;
    }
  }

  public Back deepCopy() {
    return new Back(this);
  }

  @Override
  public void clear() {
    setCodeIsSet(false);
    this.code = 0;
    this.text = null;
    this.spare1 = null;
    this.spare2 = null;
  }

  /**
   * 结果代码
   */
  public int getCode() {
    return this.code;
  }

  /**
   * 结果代码
   */
  public Back setCode(int code) {
    this.code = code;
    setCodeIsSet(true);
    return this;
  }

  public void unsetCode() {
    __isset_bitfield = EncodingUtils.clearBit(__isset_bitfield, __CODE_ISSET_ID);
  }

  /** Returns true if field code is set (has been assigned a value) and false otherwise */
  public boolean isSetCode() {
    return EncodingUtils.testBit(__isset_bitfield, __CODE_ISSET_ID);
  }

  public void setCodeIsSet(boolean value) {
    __isset_bitfield = EncodingUtils.setBit(__isset_bitfield, __CODE_ISSET_ID, value);
  }

  /**
   * 结果说明
   */
  public String getText() {
    return this.text;
  }

  /**
   * 结果说明
   */
  public Back setText(String text) {
    this.text = text;
    return this;
  }

  public void unsetText() {
    this.text = null;
  }

  /** Returns true if field text is set (has been assigned a value) and false otherwise */
  public boolean isSetText() {
    return this.text != null;
  }

  public void setTextIsSet(boolean value) {
    if (!value) {
      this.text = null;
    }
  }

  /**
   * 备用1
   */
  public String getSpare1() {
    return this.spare1;
  }

  /**
   * 备用1
   */
  public Back setSpare1(String spare1) {
    this.spare1 = spare1;
    return this;
  }

  public void unsetSpare1() {
    this.spare1 = null;
  }

  /** Returns true if field spare1 is set (has been assigned a value) and false otherwise */
  public boolean isSetSpare1() {
    return this.spare1 != null;
  }

  public void setSpare1IsSet(boolean value) {
    if (!value) {
      this.spare1 = null;
    }
  }

  /**
   * 备用2
   */
  public String getSpare2() {
    return this.spare2;
  }

  /**
   * 备用2
   */
  public Back setSpare2(String spare2) {
    this.spare2 = spare2;
    return this;
  }

  public void unsetSpare2() {
    this.spare2 = null;
  }

  /** Returns true if field spare2 is set (has been assigned a value) and false otherwise */
  public boolean isSetSpare2() {
    return this.spare2 != null;
  }

  public void setSpare2IsSet(boolean value) {
    if (!value) {
      this.spare2 = null;
    }
  }

  public void setFieldValue(_Fields field, Object value) {
    switch (field) {
    case CODE:
      if (value == null) {
        unsetCode();
      } else {
        setCode((Integer)value);
      }
      break;

    case TEXT:
      if (value == null) {
        unsetText();
      } else {
        setText((String)value);
      }
      break;

    case SPARE1:
      if (value == null) {
        unsetSpare1();
      } else {
        setSpare1((String)value);
      }
      break;

    case SPARE2:
      if (value == null) {
        unsetSpare2();
      } else {
        setSpare2((String)value);
      }
      break;

    }
  }

  public Object getFieldValue(_Fields field) {
    switch (field) {
    case CODE:
      return getCode();

    case TEXT:
      return getText();

    case SPARE1:
      return getSpare1();

    case SPARE2:
      return getSpare2();

    }
    throw new IllegalStateException();
  }

  /** Returns true if field corresponding to fieldID is set (has been assigned a value) and false otherwise */
  public boolean isSet(_Fields field) {
    if (field == null) {
      throw new IllegalArgumentException();
    }

    switch (field) {
    case CODE:
      return isSetCode();
    case TEXT:
      return isSetText();
    case SPARE1:
      return isSetSpare1();
    case SPARE2:
      return isSetSpare2();
    }
    throw new IllegalStateException();
  }

  @Override
  public boolean equals(Object that) {
    if (that == null)
      return false;
    if (that instanceof Back)
      return this.equals((Back)that);
    return false;
  }

  public boolean equals(Back that) {
    if (that == null)
      return false;

    boolean this_present_code = true;
    boolean that_present_code = true;
    if (this_present_code || that_present_code) {
      if (!(this_present_code && that_present_code))
        return false;
      if (this.code != that.code)
        return false;
    }

    boolean this_present_text = true && this.isSetText();
    boolean that_present_text = true && that.isSetText();
    if (this_present_text || that_present_text) {
      if (!(this_present_text && that_present_text))
        return false;
      if (!this.text.equals(that.text))
        return false;
    }

    boolean this_present_spare1 = true && this.isSetSpare1();
    boolean that_present_spare1 = true && that.isSetSpare1();
    if (this_present_spare1 || that_present_spare1) {
      if (!(this_present_spare1 && that_present_spare1))
        return false;
      if (!this.spare1.equals(that.spare1))
        return false;
    }

    boolean this_present_spare2 = true && this.isSetSpare2();
    boolean that_present_spare2 = true && that.isSetSpare2();
    if (this_present_spare2 || that_present_spare2) {
      if (!(this_present_spare2 && that_present_spare2))
        return false;
      if (!this.spare2.equals(that.spare2))
        return false;
    }

    return true;
  }

  @Override
  public int hashCode() {
    List<Object> list = new ArrayList<Object>();

    boolean present_code = true;
    list.add(present_code);
    if (present_code)
      list.add(code);

    boolean present_text = true && (isSetText());
    list.add(present_text);
    if (present_text)
      list.add(text);

    boolean present_spare1 = true && (isSetSpare1());
    list.add(present_spare1);
    if (present_spare1)
      list.add(spare1);

    boolean present_spare2 = true && (isSetSpare2());
    list.add(present_spare2);
    if (present_spare2)
      list.add(spare2);

    return list.hashCode();
  }

  @Override
  public int compareTo(Back other) {
    if (!getClass().equals(other.getClass())) {
      return getClass().getName().compareTo(other.getClass().getName());
    }

    int lastComparison = 0;

    lastComparison = Boolean.valueOf(isSetCode()).compareTo(other.isSetCode());
    if (lastComparison != 0) {
      return lastComparison;
    }
    if (isSetCode()) {
      lastComparison = org.apache.thrift.TBaseHelper.compareTo(this.code, other.code);
      if (lastComparison != 0) {
        return lastComparison;
      }
    }
    lastComparison = Boolean.valueOf(isSetText()).compareTo(other.isSetText());
    if (lastComparison != 0) {
      return lastComparison;
    }
    if (isSetText()) {
      lastComparison = org.apache.thrift.TBaseHelper.compareTo(this.text, other.text);
      if (lastComparison != 0) {
        return lastComparison;
      }
    }
    lastComparison = Boolean.valueOf(isSetSpare1()).compareTo(other.isSetSpare1());
    if (lastComparison != 0) {
      return lastComparison;
    }
    if (isSetSpare1()) {
      lastComparison = org.apache.thrift.TBaseHelper.compareTo(this.spare1, other.spare1);
      if (lastComparison != 0) {
        return lastComparison;
      }
    }
    lastComparison = Boolean.valueOf(isSetSpare2()).compareTo(other.isSetSpare2());
    if (lastComparison != 0) {
      return lastComparison;
    }
    if (isSetSpare2()) {
      lastComparison = org.apache.thrift.TBaseHelper.compareTo(this.spare2, other.spare2);
      if (lastComparison != 0) {
        return lastComparison;
      }
    }
    return 0;
  }

  public _Fields fieldForId(int fieldId) {
    return _Fields.findByThriftId(fieldId);
  }

  public void read(org.apache.thrift.protocol.TProtocol iprot) throws org.apache.thrift.TException {
    schemes.get(iprot.getScheme()).getScheme().read(iprot, this);
  }

  public void write(org.apache.thrift.protocol.TProtocol oprot) throws org.apache.thrift.TException {
    schemes.get(oprot.getScheme()).getScheme().write(oprot, this);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder("Back(");
    boolean first = true;

    sb.append("code:");
    sb.append(this.code);
    first = false;
    if (!first) sb.append(", ");
    sb.append("text:");
    if (this.text == null) {
      sb.append("null");
    } else {
      sb.append(this.text);
    }
    first = false;
    if (!first) sb.append(", ");
    sb.append("spare1:");
    if (this.spare1 == null) {
      sb.append("null");
    } else {
      sb.append(this.spare1);
    }
    first = false;
    if (!first) sb.append(", ");
    sb.append("spare2:");
    if (this.spare2 == null) {
      sb.append("null");
    } else {
      sb.append(this.spare2);
    }
    first = false;
    sb.append(")");
    return sb.toString();
  }

  public void validate() throws org.apache.thrift.TException {
    // check for required fields
    // check for sub-struct validity
  }

  private void writeObject(java.io.ObjectOutputStream out) throws java.io.IOException {
    try {
      write(new org.apache.thrift.protocol.TCompactProtocol(new org.apache.thrift.transport.TIOStreamTransport(out)));
    } catch (org.apache.thrift.TException te) {
      throw new java.io.IOException(te);
    }
  }

  private void readObject(java.io.ObjectInputStream in) throws java.io.IOException, ClassNotFoundException {
    try {
      // it doesn't seem like you should have to do this, but java serialization is wacky, and doesn't call the default constructor.
      __isset_bitfield = 0;
      read(new org.apache.thrift.protocol.TCompactProtocol(new org.apache.thrift.transport.TIOStreamTransport(in)));
    } catch (org.apache.thrift.TException te) {
      throw new java.io.IOException(te);
    }
  }

  private static class BackStandardSchemeFactory implements SchemeFactory {
    public BackStandardScheme getScheme() {
      return new BackStandardScheme();
    }
  }

  private static class BackStandardScheme extends StandardScheme<Back> {

    public void read(org.apache.thrift.protocol.TProtocol iprot, Back struct) throws org.apache.thrift.TException {
      org.apache.thrift.protocol.TField schemeField;
      iprot.readStructBegin();
      while (true)
      {
        schemeField = iprot.readFieldBegin();
        if (schemeField.type == org.apache.thrift.protocol.TType.STOP) { 
          break;
        }
        switch (schemeField.id) {
          case 1: // CODE
            if (schemeField.type == org.apache.thrift.protocol.TType.I32) {
              struct.code = iprot.readI32();
              struct.setCodeIsSet(true);
            } else { 
              org.apache.thrift.protocol.TProtocolUtil.skip(iprot, schemeField.type);
            }
            break;
          case 2: // TEXT
            if (schemeField.type == org.apache.thrift.protocol.TType.STRING) {
              struct.text = iprot.readString();
              struct.setTextIsSet(true);
            } else { 
              org.apache.thrift.protocol.TProtocolUtil.skip(iprot, schemeField.type);
            }
            break;
          case 3: // SPARE1
            if (schemeField.type == org.apache.thrift.protocol.TType.STRING) {
              struct.spare1 = iprot.readString();
              struct.setSpare1IsSet(true);
            } else { 
              org.apache.thrift.protocol.TProtocolUtil.skip(iprot, schemeField.type);
            }
            break;
          case 4: // SPARE2
            if (schemeField.type == org.apache.thrift.protocol.TType.STRING) {
              struct.spare2 = iprot.readString();
              struct.setSpare2IsSet(true);
            } else { 
              org.apache.thrift.protocol.TProtocolUtil.skip(iprot, schemeField.type);
            }
            break;
          default:
            org.apache.thrift.protocol.TProtocolUtil.skip(iprot, schemeField.type);
        }
        iprot.readFieldEnd();
      }
      iprot.readStructEnd();

      // check for required fields of primitive type, which can't be checked in the validate method
      struct.validate();
    }

    public void write(org.apache.thrift.protocol.TProtocol oprot, Back struct) throws org.apache.thrift.TException {
      struct.validate();

      oprot.writeStructBegin(STRUCT_DESC);
      oprot.writeFieldBegin(CODE_FIELD_DESC);
      oprot.writeI32(struct.code);
      oprot.writeFieldEnd();
      if (struct.text != null) {
        oprot.writeFieldBegin(TEXT_FIELD_DESC);
        oprot.writeString(struct.text);
        oprot.writeFieldEnd();
      }
      if (struct.spare1 != null) {
        oprot.writeFieldBegin(SPARE1_FIELD_DESC);
        oprot.writeString(struct.spare1);
        oprot.writeFieldEnd();
      }
      if (struct.spare2 != null) {
        oprot.writeFieldBegin(SPARE2_FIELD_DESC);
        oprot.writeString(struct.spare2);
        oprot.writeFieldEnd();
      }
      oprot.writeFieldStop();
      oprot.writeStructEnd();
    }

  }

  private static class BackTupleSchemeFactory implements SchemeFactory {
    public BackTupleScheme getScheme() {
      return new BackTupleScheme();
    }
  }

  private static class BackTupleScheme extends TupleScheme<Back> {

    @Override
    public void write(org.apache.thrift.protocol.TProtocol prot, Back struct) throws org.apache.thrift.TException {
      TTupleProtocol oprot = (TTupleProtocol) prot;
      BitSet optionals = new BitSet();
      if (struct.isSetCode()) {
        optionals.set(0);
      }
      if (struct.isSetText()) {
        optionals.set(1);
      }
      if (struct.isSetSpare1()) {
        optionals.set(2);
      }
      if (struct.isSetSpare2()) {
        optionals.set(3);
      }
      oprot.writeBitSet(optionals, 4);
      if (struct.isSetCode()) {
        oprot.writeI32(struct.code);
      }
      if (struct.isSetText()) {
        oprot.writeString(struct.text);
      }
      if (struct.isSetSpare1()) {
        oprot.writeString(struct.spare1);
      }
      if (struct.isSetSpare2()) {
        oprot.writeString(struct.spare2);
      }
    }

    @Override
    public void read(org.apache.thrift.protocol.TProtocol prot, Back struct) throws org.apache.thrift.TException {
      TTupleProtocol iprot = (TTupleProtocol) prot;
      BitSet incoming = iprot.readBitSet(4);
      if (incoming.get(0)) {
        struct.code = iprot.readI32();
        struct.setCodeIsSet(true);
      }
      if (incoming.get(1)) {
        struct.text = iprot.readString();
        struct.setTextIsSet(true);
      }
      if (incoming.get(2)) {
        struct.spare1 = iprot.readString();
        struct.setSpare1IsSet(true);
      }
      if (incoming.get(3)) {
        struct.spare2 = iprot.readString();
        struct.setSpare2IsSet(true);
      }
    }
  }

}

