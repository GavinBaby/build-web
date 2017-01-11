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
@Generated(value = "Autogenerated by Thrift Compiler (0.9.3)", date = "2017-01-11")
public class AccountList implements org.apache.thrift.TBase<AccountList, AccountList._Fields>, java.io.Serializable, Cloneable, Comparable<AccountList> {
  private static final org.apache.thrift.protocol.TStruct STRUCT_DESC = new org.apache.thrift.protocol.TStruct("AccountList");

  private static final org.apache.thrift.protocol.TField DATA_FIELD_DESC = new org.apache.thrift.protocol.TField("data", org.apache.thrift.protocol.TType.LIST, (short)1);
  private static final org.apache.thrift.protocol.TField TOTAL_SIZE_FIELD_DESC = new org.apache.thrift.protocol.TField("totalSize", org.apache.thrift.protocol.TType.I32, (short)2);

  private static final Map<Class<? extends IScheme>, SchemeFactory> schemes = new HashMap<Class<? extends IScheme>, SchemeFactory>();
  static {
    schemes.put(StandardScheme.class, new AccountListStandardSchemeFactory());
    schemes.put(TupleScheme.class, new AccountListTupleSchemeFactory());
  }

  public List<Account> data; // required
  /**
   * 数据总数
   */
  public int totalSize; // required

  /** The set of fields this struct contains, along with convenience methods for finding and manipulating them. */
  public enum _Fields implements org.apache.thrift.TFieldIdEnum {
    DATA((short)1, "data"),
    /**
     * 数据总数
     */
    TOTAL_SIZE((short)2, "totalSize");

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
        case 1: // DATA
          return DATA;
        case 2: // TOTAL_SIZE
          return TOTAL_SIZE;
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
  private static final int __TOTALSIZE_ISSET_ID = 0;
  private byte __isset_bitfield = 0;
  public static final Map<_Fields, org.apache.thrift.meta_data.FieldMetaData> metaDataMap;
  static {
    Map<_Fields, org.apache.thrift.meta_data.FieldMetaData> tmpMap = new EnumMap<_Fields, org.apache.thrift.meta_data.FieldMetaData>(_Fields.class);
    tmpMap.put(_Fields.DATA, new org.apache.thrift.meta_data.FieldMetaData("data", org.apache.thrift.TFieldRequirementType.DEFAULT, 
        new org.apache.thrift.meta_data.ListMetaData(org.apache.thrift.protocol.TType.LIST, 
            new org.apache.thrift.meta_data.StructMetaData(org.apache.thrift.protocol.TType.STRUCT, Account.class))));
    tmpMap.put(_Fields.TOTAL_SIZE, new org.apache.thrift.meta_data.FieldMetaData("totalSize", org.apache.thrift.TFieldRequirementType.DEFAULT, 
        new org.apache.thrift.meta_data.FieldValueMetaData(org.apache.thrift.protocol.TType.I32)));
    metaDataMap = Collections.unmodifiableMap(tmpMap);
    org.apache.thrift.meta_data.FieldMetaData.addStructMetaDataMap(AccountList.class, metaDataMap);
  }

  public AccountList() {
  }

  public AccountList(
    List<Account> data,
    int totalSize)
  {
    this();
    this.data = data;
    this.totalSize = totalSize;
    setTotalSizeIsSet(true);
  }

  /**
   * Performs a deep copy on <i>other</i>.
   */
  public AccountList(AccountList other) {
    __isset_bitfield = other.__isset_bitfield;
    if (other.isSetData()) {
      List<Account> __this__data = new ArrayList<Account>(other.data.size());
      for (Account other_element : other.data) {
        __this__data.add(new Account(other_element));
      }
      this.data = __this__data;
    }
    this.totalSize = other.totalSize;
  }

  public AccountList deepCopy() {
    return new AccountList(this);
  }

  @Override
  public void clear() {
    this.data = null;
    setTotalSizeIsSet(false);
    this.totalSize = 0;
  }

  public int getDataSize() {
    return (this.data == null) ? 0 : this.data.size();
  }

  public java.util.Iterator<Account> getDataIterator() {
    return (this.data == null) ? null : this.data.iterator();
  }

  public void addToData(Account elem) {
    if (this.data == null) {
      this.data = new ArrayList<Account>();
    }
    this.data.add(elem);
  }

  public List<Account> getData() {
    return this.data;
  }

  public AccountList setData(List<Account> data) {
    this.data = data;
    return this;
  }

  public void unsetData() {
    this.data = null;
  }

  /** Returns true if field data is set (has been assigned a value) and false otherwise */
  public boolean isSetData() {
    return this.data != null;
  }

  public void setDataIsSet(boolean value) {
    if (!value) {
      this.data = null;
    }
  }

  /**
   * 数据总数
   */
  public int getTotalSize() {
    return this.totalSize;
  }

  /**
   * 数据总数
   */
  public AccountList setTotalSize(int totalSize) {
    this.totalSize = totalSize;
    setTotalSizeIsSet(true);
    return this;
  }

  public void unsetTotalSize() {
    __isset_bitfield = EncodingUtils.clearBit(__isset_bitfield, __TOTALSIZE_ISSET_ID);
  }

  /** Returns true if field totalSize is set (has been assigned a value) and false otherwise */
  public boolean isSetTotalSize() {
    return EncodingUtils.testBit(__isset_bitfield, __TOTALSIZE_ISSET_ID);
  }

  public void setTotalSizeIsSet(boolean value) {
    __isset_bitfield = EncodingUtils.setBit(__isset_bitfield, __TOTALSIZE_ISSET_ID, value);
  }

  public void setFieldValue(_Fields field, Object value) {
    switch (field) {
    case DATA:
      if (value == null) {
        unsetData();
      } else {
        setData((List<Account>)value);
      }
      break;

    case TOTAL_SIZE:
      if (value == null) {
        unsetTotalSize();
      } else {
        setTotalSize((Integer)value);
      }
      break;

    }
  }

  public Object getFieldValue(_Fields field) {
    switch (field) {
    case DATA:
      return getData();

    case TOTAL_SIZE:
      return getTotalSize();

    }
    throw new IllegalStateException();
  }

  /** Returns true if field corresponding to fieldID is set (has been assigned a value) and false otherwise */
  public boolean isSet(_Fields field) {
    if (field == null) {
      throw new IllegalArgumentException();
    }

    switch (field) {
    case DATA:
      return isSetData();
    case TOTAL_SIZE:
      return isSetTotalSize();
    }
    throw new IllegalStateException();
  }

  @Override
  public boolean equals(Object that) {
    if (that == null)
      return false;
    if (that instanceof AccountList)
      return this.equals((AccountList)that);
    return false;
  }

  public boolean equals(AccountList that) {
    if (that == null)
      return false;

    boolean this_present_data = true && this.isSetData();
    boolean that_present_data = true && that.isSetData();
    if (this_present_data || that_present_data) {
      if (!(this_present_data && that_present_data))
        return false;
      if (!this.data.equals(that.data))
        return false;
    }

    boolean this_present_totalSize = true;
    boolean that_present_totalSize = true;
    if (this_present_totalSize || that_present_totalSize) {
      if (!(this_present_totalSize && that_present_totalSize))
        return false;
      if (this.totalSize != that.totalSize)
        return false;
    }

    return true;
  }

  @Override
  public int hashCode() {
    List<Object> list = new ArrayList<Object>();

    boolean present_data = true && (isSetData());
    list.add(present_data);
    if (present_data)
      list.add(data);

    boolean present_totalSize = true;
    list.add(present_totalSize);
    if (present_totalSize)
      list.add(totalSize);

    return list.hashCode();
  }

  @Override
  public int compareTo(AccountList other) {
    if (!getClass().equals(other.getClass())) {
      return getClass().getName().compareTo(other.getClass().getName());
    }

    int lastComparison = 0;

    lastComparison = Boolean.valueOf(isSetData()).compareTo(other.isSetData());
    if (lastComparison != 0) {
      return lastComparison;
    }
    if (isSetData()) {
      lastComparison = org.apache.thrift.TBaseHelper.compareTo(this.data, other.data);
      if (lastComparison != 0) {
        return lastComparison;
      }
    }
    lastComparison = Boolean.valueOf(isSetTotalSize()).compareTo(other.isSetTotalSize());
    if (lastComparison != 0) {
      return lastComparison;
    }
    if (isSetTotalSize()) {
      lastComparison = org.apache.thrift.TBaseHelper.compareTo(this.totalSize, other.totalSize);
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
    StringBuilder sb = new StringBuilder("AccountList(");
    boolean first = true;

    sb.append("data:");
    if (this.data == null) {
      sb.append("null");
    } else {
      sb.append(this.data);
    }
    first = false;
    if (!first) sb.append(", ");
    sb.append("totalSize:");
    sb.append(this.totalSize);
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

  private static class AccountListStandardSchemeFactory implements SchemeFactory {
    public AccountListStandardScheme getScheme() {
      return new AccountListStandardScheme();
    }
  }

  private static class AccountListStandardScheme extends StandardScheme<AccountList> {

    public void read(org.apache.thrift.protocol.TProtocol iprot, AccountList struct) throws org.apache.thrift.TException {
      org.apache.thrift.protocol.TField schemeField;
      iprot.readStructBegin();
      while (true)
      {
        schemeField = iprot.readFieldBegin();
        if (schemeField.type == org.apache.thrift.protocol.TType.STOP) { 
          break;
        }
        switch (schemeField.id) {
          case 1: // DATA
            if (schemeField.type == org.apache.thrift.protocol.TType.LIST) {
              {
                org.apache.thrift.protocol.TList _list0 = iprot.readListBegin();
                struct.data = new ArrayList<Account>(_list0.size);
                Account _elem1;
                for (int _i2 = 0; _i2 < _list0.size; ++_i2)
                {
                  _elem1 = new Account();
                  _elem1.read(iprot);
                  struct.data.add(_elem1);
                }
                iprot.readListEnd();
              }
              struct.setDataIsSet(true);
            } else { 
              org.apache.thrift.protocol.TProtocolUtil.skip(iprot, schemeField.type);
            }
            break;
          case 2: // TOTAL_SIZE
            if (schemeField.type == org.apache.thrift.protocol.TType.I32) {
              struct.totalSize = iprot.readI32();
              struct.setTotalSizeIsSet(true);
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

    public void write(org.apache.thrift.protocol.TProtocol oprot, AccountList struct) throws org.apache.thrift.TException {
      struct.validate();

      oprot.writeStructBegin(STRUCT_DESC);
      if (struct.data != null) {
        oprot.writeFieldBegin(DATA_FIELD_DESC);
        {
          oprot.writeListBegin(new org.apache.thrift.protocol.TList(org.apache.thrift.protocol.TType.STRUCT, struct.data.size()));
          for (Account _iter3 : struct.data)
          {
            _iter3.write(oprot);
          }
          oprot.writeListEnd();
        }
        oprot.writeFieldEnd();
      }
      oprot.writeFieldBegin(TOTAL_SIZE_FIELD_DESC);
      oprot.writeI32(struct.totalSize);
      oprot.writeFieldEnd();
      oprot.writeFieldStop();
      oprot.writeStructEnd();
    }

  }

  private static class AccountListTupleSchemeFactory implements SchemeFactory {
    public AccountListTupleScheme getScheme() {
      return new AccountListTupleScheme();
    }
  }

  private static class AccountListTupleScheme extends TupleScheme<AccountList> {

    @Override
    public void write(org.apache.thrift.protocol.TProtocol prot, AccountList struct) throws org.apache.thrift.TException {
      TTupleProtocol oprot = (TTupleProtocol) prot;
      BitSet optionals = new BitSet();
      if (struct.isSetData()) {
        optionals.set(0);
      }
      if (struct.isSetTotalSize()) {
        optionals.set(1);
      }
      oprot.writeBitSet(optionals, 2);
      if (struct.isSetData()) {
        {
          oprot.writeI32(struct.data.size());
          for (Account _iter4 : struct.data)
          {
            _iter4.write(oprot);
          }
        }
      }
      if (struct.isSetTotalSize()) {
        oprot.writeI32(struct.totalSize);
      }
    }

    @Override
    public void read(org.apache.thrift.protocol.TProtocol prot, AccountList struct) throws org.apache.thrift.TException {
      TTupleProtocol iprot = (TTupleProtocol) prot;
      BitSet incoming = iprot.readBitSet(2);
      if (incoming.get(0)) {
        {
          org.apache.thrift.protocol.TList _list5 = new org.apache.thrift.protocol.TList(org.apache.thrift.protocol.TType.STRUCT, iprot.readI32());
          struct.data = new ArrayList<Account>(_list5.size);
          Account _elem6;
          for (int _i7 = 0; _i7 < _list5.size; ++_i7)
          {
            _elem6 = new Account();
            _elem6.read(iprot);
            struct.data.add(_elem6);
          }
        }
        struct.setDataIsSet(true);
      }
      if (incoming.get(1)) {
        struct.totalSize = iprot.readI32();
        struct.setTotalSizeIsSet(true);
      }
    }
  }

}

