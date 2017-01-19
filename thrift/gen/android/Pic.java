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
@Generated(value = "Autogenerated by Thrift Compiler (0.9.3)", date = "2017-01-19")
public class Pic implements org.apache.thrift.TBase<Pic, Pic._Fields>, java.io.Serializable, Cloneable, Comparable<Pic> {
  private static final org.apache.thrift.protocol.TStruct STRUCT_DESC = new org.apache.thrift.protocol.TStruct("Pic");

  private static final org.apache.thrift.protocol.TField ID_FIELD_DESC = new org.apache.thrift.protocol.TField("id", org.apache.thrift.protocol.TType.STRING, (short)1);
  private static final org.apache.thrift.protocol.TField TITLE_FIELD_DESC = new org.apache.thrift.protocol.TField("title", org.apache.thrift.protocol.TType.STRING, (short)2);
  private static final org.apache.thrift.protocol.TField URL_FIELD_DESC = new org.apache.thrift.protocol.TField("url", org.apache.thrift.protocol.TType.STRING, (short)3);
  private static final org.apache.thrift.protocol.TField STATE_FIELD_DESC = new org.apache.thrift.protocol.TField("state", org.apache.thrift.protocol.TType.STRING, (short)4);
  private static final org.apache.thrift.protocol.TField OP_FIELD_DESC = new org.apache.thrift.protocol.TField("op", org.apache.thrift.protocol.TType.STRING, (short)5);
  private static final org.apache.thrift.protocol.TField OP_TIME_FIELD_DESC = new org.apache.thrift.protocol.TField("op_time", org.apache.thrift.protocol.TType.STRING, (short)6);
  private static final org.apache.thrift.protocol.TField BACK_FIELD_DESC = new org.apache.thrift.protocol.TField("back", org.apache.thrift.protocol.TType.STRUCT, (short)7);
  private static final org.apache.thrift.protocol.TField DETAILS_FIELD_DESC = new org.apache.thrift.protocol.TField("details", org.apache.thrift.protocol.TType.LIST, (short)8);

  private static final Map<Class<? extends IScheme>, SchemeFactory> schemes = new HashMap<Class<? extends IScheme>, SchemeFactory>();
  static {
    schemes.put(StandardScheme.class, new PicStandardSchemeFactory());
    schemes.put(TupleScheme.class, new PicTupleSchemeFactory());
  }

  public String id; // required
  public String title; // required
  public String url; // required
  public String state; // required
  public String op; // required
  public String op_time; // required
  public Back back; // required
  public List<PicDetail> details; // required

  /** The set of fields this struct contains, along with convenience methods for finding and manipulating them. */
  public enum _Fields implements org.apache.thrift.TFieldIdEnum {
    ID((short)1, "id"),
    TITLE((short)2, "title"),
    URL((short)3, "url"),
    STATE((short)4, "state"),
    OP((short)5, "op"),
    OP_TIME((short)6, "op_time"),
    BACK((short)7, "back"),
    DETAILS((short)8, "details");

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
        case 1: // ID
          return ID;
        case 2: // TITLE
          return TITLE;
        case 3: // URL
          return URL;
        case 4: // STATE
          return STATE;
        case 5: // OP
          return OP;
        case 6: // OP_TIME
          return OP_TIME;
        case 7: // BACK
          return BACK;
        case 8: // DETAILS
          return DETAILS;
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
  public static final Map<_Fields, org.apache.thrift.meta_data.FieldMetaData> metaDataMap;
  static {
    Map<_Fields, org.apache.thrift.meta_data.FieldMetaData> tmpMap = new EnumMap<_Fields, org.apache.thrift.meta_data.FieldMetaData>(_Fields.class);
    tmpMap.put(_Fields.ID, new org.apache.thrift.meta_data.FieldMetaData("id", org.apache.thrift.TFieldRequirementType.DEFAULT, 
        new org.apache.thrift.meta_data.FieldValueMetaData(org.apache.thrift.protocol.TType.STRING)));
    tmpMap.put(_Fields.TITLE, new org.apache.thrift.meta_data.FieldMetaData("title", org.apache.thrift.TFieldRequirementType.DEFAULT, 
        new org.apache.thrift.meta_data.FieldValueMetaData(org.apache.thrift.protocol.TType.STRING)));
    tmpMap.put(_Fields.URL, new org.apache.thrift.meta_data.FieldMetaData("url", org.apache.thrift.TFieldRequirementType.DEFAULT, 
        new org.apache.thrift.meta_data.FieldValueMetaData(org.apache.thrift.protocol.TType.STRING)));
    tmpMap.put(_Fields.STATE, new org.apache.thrift.meta_data.FieldMetaData("state", org.apache.thrift.TFieldRequirementType.DEFAULT, 
        new org.apache.thrift.meta_data.FieldValueMetaData(org.apache.thrift.protocol.TType.STRING)));
    tmpMap.put(_Fields.OP, new org.apache.thrift.meta_data.FieldMetaData("op", org.apache.thrift.TFieldRequirementType.DEFAULT, 
        new org.apache.thrift.meta_data.FieldValueMetaData(org.apache.thrift.protocol.TType.STRING)));
    tmpMap.put(_Fields.OP_TIME, new org.apache.thrift.meta_data.FieldMetaData("op_time", org.apache.thrift.TFieldRequirementType.DEFAULT, 
        new org.apache.thrift.meta_data.FieldValueMetaData(org.apache.thrift.protocol.TType.STRING)));
    tmpMap.put(_Fields.BACK, new org.apache.thrift.meta_data.FieldMetaData("back", org.apache.thrift.TFieldRequirementType.DEFAULT, 
        new org.apache.thrift.meta_data.StructMetaData(org.apache.thrift.protocol.TType.STRUCT, Back.class)));
    tmpMap.put(_Fields.DETAILS, new org.apache.thrift.meta_data.FieldMetaData("details", org.apache.thrift.TFieldRequirementType.DEFAULT, 
        new org.apache.thrift.meta_data.ListMetaData(org.apache.thrift.protocol.TType.LIST, 
            new org.apache.thrift.meta_data.StructMetaData(org.apache.thrift.protocol.TType.STRUCT, PicDetail.class))));
    metaDataMap = Collections.unmodifiableMap(tmpMap);
    org.apache.thrift.meta_data.FieldMetaData.addStructMetaDataMap(Pic.class, metaDataMap);
  }

  public Pic() {
  }

  public Pic(
    String id,
    String title,
    String url,
    String state,
    String op,
    String op_time,
    Back back,
    List<PicDetail> details)
  {
    this();
    this.id = id;
    this.title = title;
    this.url = url;
    this.state = state;
    this.op = op;
    this.op_time = op_time;
    this.back = back;
    this.details = details;
  }

  /**
   * Performs a deep copy on <i>other</i>.
   */
  public Pic(Pic other) {
    if (other.isSetId()) {
      this.id = other.id;
    }
    if (other.isSetTitle()) {
      this.title = other.title;
    }
    if (other.isSetUrl()) {
      this.url = other.url;
    }
    if (other.isSetState()) {
      this.state = other.state;
    }
    if (other.isSetOp()) {
      this.op = other.op;
    }
    if (other.isSetOp_time()) {
      this.op_time = other.op_time;
    }
    if (other.isSetBack()) {
      this.back = new Back(other.back);
    }
    if (other.isSetDetails()) {
      List<PicDetail> __this__details = new ArrayList<PicDetail>(other.details.size());
      for (PicDetail other_element : other.details) {
        __this__details.add(new PicDetail(other_element));
      }
      this.details = __this__details;
    }
  }

  public Pic deepCopy() {
    return new Pic(this);
  }

  @Override
  public void clear() {
    this.id = null;
    this.title = null;
    this.url = null;
    this.state = null;
    this.op = null;
    this.op_time = null;
    this.back = null;
    this.details = null;
  }

  public String getId() {
    return this.id;
  }

  public Pic setId(String id) {
    this.id = id;
    return this;
  }

  public void unsetId() {
    this.id = null;
  }

  /** Returns true if field id is set (has been assigned a value) and false otherwise */
  public boolean isSetId() {
    return this.id != null;
  }

  public void setIdIsSet(boolean value) {
    if (!value) {
      this.id = null;
    }
  }

  public String getTitle() {
    return this.title;
  }

  public Pic setTitle(String title) {
    this.title = title;
    return this;
  }

  public void unsetTitle() {
    this.title = null;
  }

  /** Returns true if field title is set (has been assigned a value) and false otherwise */
  public boolean isSetTitle() {
    return this.title != null;
  }

  public void setTitleIsSet(boolean value) {
    if (!value) {
      this.title = null;
    }
  }

  public String getUrl() {
    return this.url;
  }

  public Pic setUrl(String url) {
    this.url = url;
    return this;
  }

  public void unsetUrl() {
    this.url = null;
  }

  /** Returns true if field url is set (has been assigned a value) and false otherwise */
  public boolean isSetUrl() {
    return this.url != null;
  }

  public void setUrlIsSet(boolean value) {
    if (!value) {
      this.url = null;
    }
  }

  public String getState() {
    return this.state;
  }

  public Pic setState(String state) {
    this.state = state;
    return this;
  }

  public void unsetState() {
    this.state = null;
  }

  /** Returns true if field state is set (has been assigned a value) and false otherwise */
  public boolean isSetState() {
    return this.state != null;
  }

  public void setStateIsSet(boolean value) {
    if (!value) {
      this.state = null;
    }
  }

  public String getOp() {
    return this.op;
  }

  public Pic setOp(String op) {
    this.op = op;
    return this;
  }

  public void unsetOp() {
    this.op = null;
  }

  /** Returns true if field op is set (has been assigned a value) and false otherwise */
  public boolean isSetOp() {
    return this.op != null;
  }

  public void setOpIsSet(boolean value) {
    if (!value) {
      this.op = null;
    }
  }

  public String getOp_time() {
    return this.op_time;
  }

  public Pic setOp_time(String op_time) {
    this.op_time = op_time;
    return this;
  }

  public void unsetOp_time() {
    this.op_time = null;
  }

  /** Returns true if field op_time is set (has been assigned a value) and false otherwise */
  public boolean isSetOp_time() {
    return this.op_time != null;
  }

  public void setOp_timeIsSet(boolean value) {
    if (!value) {
      this.op_time = null;
    }
  }

  public Back getBack() {
    return this.back;
  }

  public Pic setBack(Back back) {
    this.back = back;
    return this;
  }

  public void unsetBack() {
    this.back = null;
  }

  /** Returns true if field back is set (has been assigned a value) and false otherwise */
  public boolean isSetBack() {
    return this.back != null;
  }

  public void setBackIsSet(boolean value) {
    if (!value) {
      this.back = null;
    }
  }

  public int getDetailsSize() {
    return (this.details == null) ? 0 : this.details.size();
  }

  public java.util.Iterator<PicDetail> getDetailsIterator() {
    return (this.details == null) ? null : this.details.iterator();
  }

  public void addToDetails(PicDetail elem) {
    if (this.details == null) {
      this.details = new ArrayList<PicDetail>();
    }
    this.details.add(elem);
  }

  public List<PicDetail> getDetails() {
    return this.details;
  }

  public Pic setDetails(List<PicDetail> details) {
    this.details = details;
    return this;
  }

  public void unsetDetails() {
    this.details = null;
  }

  /** Returns true if field details is set (has been assigned a value) and false otherwise */
  public boolean isSetDetails() {
    return this.details != null;
  }

  public void setDetailsIsSet(boolean value) {
    if (!value) {
      this.details = null;
    }
  }

  public void setFieldValue(_Fields field, Object value) {
    switch (field) {
    case ID:
      if (value == null) {
        unsetId();
      } else {
        setId((String)value);
      }
      break;

    case TITLE:
      if (value == null) {
        unsetTitle();
      } else {
        setTitle((String)value);
      }
      break;

    case URL:
      if (value == null) {
        unsetUrl();
      } else {
        setUrl((String)value);
      }
      break;

    case STATE:
      if (value == null) {
        unsetState();
      } else {
        setState((String)value);
      }
      break;

    case OP:
      if (value == null) {
        unsetOp();
      } else {
        setOp((String)value);
      }
      break;

    case OP_TIME:
      if (value == null) {
        unsetOp_time();
      } else {
        setOp_time((String)value);
      }
      break;

    case BACK:
      if (value == null) {
        unsetBack();
      } else {
        setBack((Back)value);
      }
      break;

    case DETAILS:
      if (value == null) {
        unsetDetails();
      } else {
        setDetails((List<PicDetail>)value);
      }
      break;

    }
  }

  public Object getFieldValue(_Fields field) {
    switch (field) {
    case ID:
      return getId();

    case TITLE:
      return getTitle();

    case URL:
      return getUrl();

    case STATE:
      return getState();

    case OP:
      return getOp();

    case OP_TIME:
      return getOp_time();

    case BACK:
      return getBack();

    case DETAILS:
      return getDetails();

    }
    throw new IllegalStateException();
  }

  /** Returns true if field corresponding to fieldID is set (has been assigned a value) and false otherwise */
  public boolean isSet(_Fields field) {
    if (field == null) {
      throw new IllegalArgumentException();
    }

    switch (field) {
    case ID:
      return isSetId();
    case TITLE:
      return isSetTitle();
    case URL:
      return isSetUrl();
    case STATE:
      return isSetState();
    case OP:
      return isSetOp();
    case OP_TIME:
      return isSetOp_time();
    case BACK:
      return isSetBack();
    case DETAILS:
      return isSetDetails();
    }
    throw new IllegalStateException();
  }

  @Override
  public boolean equals(Object that) {
    if (that == null)
      return false;
    if (that instanceof Pic)
      return this.equals((Pic)that);
    return false;
  }

  public boolean equals(Pic that) {
    if (that == null)
      return false;

    boolean this_present_id = true && this.isSetId();
    boolean that_present_id = true && that.isSetId();
    if (this_present_id || that_present_id) {
      if (!(this_present_id && that_present_id))
        return false;
      if (!this.id.equals(that.id))
        return false;
    }

    boolean this_present_title = true && this.isSetTitle();
    boolean that_present_title = true && that.isSetTitle();
    if (this_present_title || that_present_title) {
      if (!(this_present_title && that_present_title))
        return false;
      if (!this.title.equals(that.title))
        return false;
    }

    boolean this_present_url = true && this.isSetUrl();
    boolean that_present_url = true && that.isSetUrl();
    if (this_present_url || that_present_url) {
      if (!(this_present_url && that_present_url))
        return false;
      if (!this.url.equals(that.url))
        return false;
    }

    boolean this_present_state = true && this.isSetState();
    boolean that_present_state = true && that.isSetState();
    if (this_present_state || that_present_state) {
      if (!(this_present_state && that_present_state))
        return false;
      if (!this.state.equals(that.state))
        return false;
    }

    boolean this_present_op = true && this.isSetOp();
    boolean that_present_op = true && that.isSetOp();
    if (this_present_op || that_present_op) {
      if (!(this_present_op && that_present_op))
        return false;
      if (!this.op.equals(that.op))
        return false;
    }

    boolean this_present_op_time = true && this.isSetOp_time();
    boolean that_present_op_time = true && that.isSetOp_time();
    if (this_present_op_time || that_present_op_time) {
      if (!(this_present_op_time && that_present_op_time))
        return false;
      if (!this.op_time.equals(that.op_time))
        return false;
    }

    boolean this_present_back = true && this.isSetBack();
    boolean that_present_back = true && that.isSetBack();
    if (this_present_back || that_present_back) {
      if (!(this_present_back && that_present_back))
        return false;
      if (!this.back.equals(that.back))
        return false;
    }

    boolean this_present_details = true && this.isSetDetails();
    boolean that_present_details = true && that.isSetDetails();
    if (this_present_details || that_present_details) {
      if (!(this_present_details && that_present_details))
        return false;
      if (!this.details.equals(that.details))
        return false;
    }

    return true;
  }

  @Override
  public int hashCode() {
    List<Object> list = new ArrayList<Object>();

    boolean present_id = true && (isSetId());
    list.add(present_id);
    if (present_id)
      list.add(id);

    boolean present_title = true && (isSetTitle());
    list.add(present_title);
    if (present_title)
      list.add(title);

    boolean present_url = true && (isSetUrl());
    list.add(present_url);
    if (present_url)
      list.add(url);

    boolean present_state = true && (isSetState());
    list.add(present_state);
    if (present_state)
      list.add(state);

    boolean present_op = true && (isSetOp());
    list.add(present_op);
    if (present_op)
      list.add(op);

    boolean present_op_time = true && (isSetOp_time());
    list.add(present_op_time);
    if (present_op_time)
      list.add(op_time);

    boolean present_back = true && (isSetBack());
    list.add(present_back);
    if (present_back)
      list.add(back);

    boolean present_details = true && (isSetDetails());
    list.add(present_details);
    if (present_details)
      list.add(details);

    return list.hashCode();
  }

  @Override
  public int compareTo(Pic other) {
    if (!getClass().equals(other.getClass())) {
      return getClass().getName().compareTo(other.getClass().getName());
    }

    int lastComparison = 0;

    lastComparison = Boolean.valueOf(isSetId()).compareTo(other.isSetId());
    if (lastComparison != 0) {
      return lastComparison;
    }
    if (isSetId()) {
      lastComparison = org.apache.thrift.TBaseHelper.compareTo(this.id, other.id);
      if (lastComparison != 0) {
        return lastComparison;
      }
    }
    lastComparison = Boolean.valueOf(isSetTitle()).compareTo(other.isSetTitle());
    if (lastComparison != 0) {
      return lastComparison;
    }
    if (isSetTitle()) {
      lastComparison = org.apache.thrift.TBaseHelper.compareTo(this.title, other.title);
      if (lastComparison != 0) {
        return lastComparison;
      }
    }
    lastComparison = Boolean.valueOf(isSetUrl()).compareTo(other.isSetUrl());
    if (lastComparison != 0) {
      return lastComparison;
    }
    if (isSetUrl()) {
      lastComparison = org.apache.thrift.TBaseHelper.compareTo(this.url, other.url);
      if (lastComparison != 0) {
        return lastComparison;
      }
    }
    lastComparison = Boolean.valueOf(isSetState()).compareTo(other.isSetState());
    if (lastComparison != 0) {
      return lastComparison;
    }
    if (isSetState()) {
      lastComparison = org.apache.thrift.TBaseHelper.compareTo(this.state, other.state);
      if (lastComparison != 0) {
        return lastComparison;
      }
    }
    lastComparison = Boolean.valueOf(isSetOp()).compareTo(other.isSetOp());
    if (lastComparison != 0) {
      return lastComparison;
    }
    if (isSetOp()) {
      lastComparison = org.apache.thrift.TBaseHelper.compareTo(this.op, other.op);
      if (lastComparison != 0) {
        return lastComparison;
      }
    }
    lastComparison = Boolean.valueOf(isSetOp_time()).compareTo(other.isSetOp_time());
    if (lastComparison != 0) {
      return lastComparison;
    }
    if (isSetOp_time()) {
      lastComparison = org.apache.thrift.TBaseHelper.compareTo(this.op_time, other.op_time);
      if (lastComparison != 0) {
        return lastComparison;
      }
    }
    lastComparison = Boolean.valueOf(isSetBack()).compareTo(other.isSetBack());
    if (lastComparison != 0) {
      return lastComparison;
    }
    if (isSetBack()) {
      lastComparison = org.apache.thrift.TBaseHelper.compareTo(this.back, other.back);
      if (lastComparison != 0) {
        return lastComparison;
      }
    }
    lastComparison = Boolean.valueOf(isSetDetails()).compareTo(other.isSetDetails());
    if (lastComparison != 0) {
      return lastComparison;
    }
    if (isSetDetails()) {
      lastComparison = org.apache.thrift.TBaseHelper.compareTo(this.details, other.details);
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
    StringBuilder sb = new StringBuilder("Pic(");
    boolean first = true;

    sb.append("id:");
    if (this.id == null) {
      sb.append("null");
    } else {
      sb.append(this.id);
    }
    first = false;
    if (!first) sb.append(", ");
    sb.append("title:");
    if (this.title == null) {
      sb.append("null");
    } else {
      sb.append(this.title);
    }
    first = false;
    if (!first) sb.append(", ");
    sb.append("url:");
    if (this.url == null) {
      sb.append("null");
    } else {
      sb.append(this.url);
    }
    first = false;
    if (!first) sb.append(", ");
    sb.append("state:");
    if (this.state == null) {
      sb.append("null");
    } else {
      sb.append(this.state);
    }
    first = false;
    if (!first) sb.append(", ");
    sb.append("op:");
    if (this.op == null) {
      sb.append("null");
    } else {
      sb.append(this.op);
    }
    first = false;
    if (!first) sb.append(", ");
    sb.append("op_time:");
    if (this.op_time == null) {
      sb.append("null");
    } else {
      sb.append(this.op_time);
    }
    first = false;
    if (!first) sb.append(", ");
    sb.append("back:");
    if (this.back == null) {
      sb.append("null");
    } else {
      sb.append(this.back);
    }
    first = false;
    if (!first) sb.append(", ");
    sb.append("details:");
    if (this.details == null) {
      sb.append("null");
    } else {
      sb.append(this.details);
    }
    first = false;
    sb.append(")");
    return sb.toString();
  }

  public void validate() throws org.apache.thrift.TException {
    // check for required fields
    // check for sub-struct validity
    if (back != null) {
      back.validate();
    }
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
      read(new org.apache.thrift.protocol.TCompactProtocol(new org.apache.thrift.transport.TIOStreamTransport(in)));
    } catch (org.apache.thrift.TException te) {
      throw new java.io.IOException(te);
    }
  }

  private static class PicStandardSchemeFactory implements SchemeFactory {
    public PicStandardScheme getScheme() {
      return new PicStandardScheme();
    }
  }

  private static class PicStandardScheme extends StandardScheme<Pic> {

    public void read(org.apache.thrift.protocol.TProtocol iprot, Pic struct) throws org.apache.thrift.TException {
      org.apache.thrift.protocol.TField schemeField;
      iprot.readStructBegin();
      while (true)
      {
        schemeField = iprot.readFieldBegin();
        if (schemeField.type == org.apache.thrift.protocol.TType.STOP) { 
          break;
        }
        switch (schemeField.id) {
          case 1: // ID
            if (schemeField.type == org.apache.thrift.protocol.TType.STRING) {
              struct.id = iprot.readString();
              struct.setIdIsSet(true);
            } else { 
              org.apache.thrift.protocol.TProtocolUtil.skip(iprot, schemeField.type);
            }
            break;
          case 2: // TITLE
            if (schemeField.type == org.apache.thrift.protocol.TType.STRING) {
              struct.title = iprot.readString();
              struct.setTitleIsSet(true);
            } else { 
              org.apache.thrift.protocol.TProtocolUtil.skip(iprot, schemeField.type);
            }
            break;
          case 3: // URL
            if (schemeField.type == org.apache.thrift.protocol.TType.STRING) {
              struct.url = iprot.readString();
              struct.setUrlIsSet(true);
            } else { 
              org.apache.thrift.protocol.TProtocolUtil.skip(iprot, schemeField.type);
            }
            break;
          case 4: // STATE
            if (schemeField.type == org.apache.thrift.protocol.TType.STRING) {
              struct.state = iprot.readString();
              struct.setStateIsSet(true);
            } else { 
              org.apache.thrift.protocol.TProtocolUtil.skip(iprot, schemeField.type);
            }
            break;
          case 5: // OP
            if (schemeField.type == org.apache.thrift.protocol.TType.STRING) {
              struct.op = iprot.readString();
              struct.setOpIsSet(true);
            } else { 
              org.apache.thrift.protocol.TProtocolUtil.skip(iprot, schemeField.type);
            }
            break;
          case 6: // OP_TIME
            if (schemeField.type == org.apache.thrift.protocol.TType.STRING) {
              struct.op_time = iprot.readString();
              struct.setOp_timeIsSet(true);
            } else { 
              org.apache.thrift.protocol.TProtocolUtil.skip(iprot, schemeField.type);
            }
            break;
          case 7: // BACK
            if (schemeField.type == org.apache.thrift.protocol.TType.STRUCT) {
              struct.back = new Back();
              struct.back.read(iprot);
              struct.setBackIsSet(true);
            } else { 
              org.apache.thrift.protocol.TProtocolUtil.skip(iprot, schemeField.type);
            }
            break;
          case 8: // DETAILS
            if (schemeField.type == org.apache.thrift.protocol.TType.LIST) {
              {
                org.apache.thrift.protocol.TList _list16 = iprot.readListBegin();
                struct.details = new ArrayList<PicDetail>(_list16.size);
                PicDetail _elem17;
                for (int _i18 = 0; _i18 < _list16.size; ++_i18)
                {
                  _elem17 = new PicDetail();
                  _elem17.read(iprot);
                  struct.details.add(_elem17);
                }
                iprot.readListEnd();
              }
              struct.setDetailsIsSet(true);
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

    public void write(org.apache.thrift.protocol.TProtocol oprot, Pic struct) throws org.apache.thrift.TException {
      struct.validate();

      oprot.writeStructBegin(STRUCT_DESC);
      if (struct.id != null) {
        oprot.writeFieldBegin(ID_FIELD_DESC);
        oprot.writeString(struct.id);
        oprot.writeFieldEnd();
      }
      if (struct.title != null) {
        oprot.writeFieldBegin(TITLE_FIELD_DESC);
        oprot.writeString(struct.title);
        oprot.writeFieldEnd();
      }
      if (struct.url != null) {
        oprot.writeFieldBegin(URL_FIELD_DESC);
        oprot.writeString(struct.url);
        oprot.writeFieldEnd();
      }
      if (struct.state != null) {
        oprot.writeFieldBegin(STATE_FIELD_DESC);
        oprot.writeString(struct.state);
        oprot.writeFieldEnd();
      }
      if (struct.op != null) {
        oprot.writeFieldBegin(OP_FIELD_DESC);
        oprot.writeString(struct.op);
        oprot.writeFieldEnd();
      }
      if (struct.op_time != null) {
        oprot.writeFieldBegin(OP_TIME_FIELD_DESC);
        oprot.writeString(struct.op_time);
        oprot.writeFieldEnd();
      }
      if (struct.back != null) {
        oprot.writeFieldBegin(BACK_FIELD_DESC);
        struct.back.write(oprot);
        oprot.writeFieldEnd();
      }
      if (struct.details != null) {
        oprot.writeFieldBegin(DETAILS_FIELD_DESC);
        {
          oprot.writeListBegin(new org.apache.thrift.protocol.TList(org.apache.thrift.protocol.TType.STRUCT, struct.details.size()));
          for (PicDetail _iter19 : struct.details)
          {
            _iter19.write(oprot);
          }
          oprot.writeListEnd();
        }
        oprot.writeFieldEnd();
      }
      oprot.writeFieldStop();
      oprot.writeStructEnd();
    }

  }

  private static class PicTupleSchemeFactory implements SchemeFactory {
    public PicTupleScheme getScheme() {
      return new PicTupleScheme();
    }
  }

  private static class PicTupleScheme extends TupleScheme<Pic> {

    @Override
    public void write(org.apache.thrift.protocol.TProtocol prot, Pic struct) throws org.apache.thrift.TException {
      TTupleProtocol oprot = (TTupleProtocol) prot;
      BitSet optionals = new BitSet();
      if (struct.isSetId()) {
        optionals.set(0);
      }
      if (struct.isSetTitle()) {
        optionals.set(1);
      }
      if (struct.isSetUrl()) {
        optionals.set(2);
      }
      if (struct.isSetState()) {
        optionals.set(3);
      }
      if (struct.isSetOp()) {
        optionals.set(4);
      }
      if (struct.isSetOp_time()) {
        optionals.set(5);
      }
      if (struct.isSetBack()) {
        optionals.set(6);
      }
      if (struct.isSetDetails()) {
        optionals.set(7);
      }
      oprot.writeBitSet(optionals, 8);
      if (struct.isSetId()) {
        oprot.writeString(struct.id);
      }
      if (struct.isSetTitle()) {
        oprot.writeString(struct.title);
      }
      if (struct.isSetUrl()) {
        oprot.writeString(struct.url);
      }
      if (struct.isSetState()) {
        oprot.writeString(struct.state);
      }
      if (struct.isSetOp()) {
        oprot.writeString(struct.op);
      }
      if (struct.isSetOp_time()) {
        oprot.writeString(struct.op_time);
      }
      if (struct.isSetBack()) {
        struct.back.write(oprot);
      }
      if (struct.isSetDetails()) {
        {
          oprot.writeI32(struct.details.size());
          for (PicDetail _iter20 : struct.details)
          {
            _iter20.write(oprot);
          }
        }
      }
    }

    @Override
    public void read(org.apache.thrift.protocol.TProtocol prot, Pic struct) throws org.apache.thrift.TException {
      TTupleProtocol iprot = (TTupleProtocol) prot;
      BitSet incoming = iprot.readBitSet(8);
      if (incoming.get(0)) {
        struct.id = iprot.readString();
        struct.setIdIsSet(true);
      }
      if (incoming.get(1)) {
        struct.title = iprot.readString();
        struct.setTitleIsSet(true);
      }
      if (incoming.get(2)) {
        struct.url = iprot.readString();
        struct.setUrlIsSet(true);
      }
      if (incoming.get(3)) {
        struct.state = iprot.readString();
        struct.setStateIsSet(true);
      }
      if (incoming.get(4)) {
        struct.op = iprot.readString();
        struct.setOpIsSet(true);
      }
      if (incoming.get(5)) {
        struct.op_time = iprot.readString();
        struct.setOp_timeIsSet(true);
      }
      if (incoming.get(6)) {
        struct.back = new Back();
        struct.back.read(iprot);
        struct.setBackIsSet(true);
      }
      if (incoming.get(7)) {
        {
          org.apache.thrift.protocol.TList _list21 = new org.apache.thrift.protocol.TList(org.apache.thrift.protocol.TType.STRUCT, iprot.readI32());
          struct.details = new ArrayList<PicDetail>(_list21.size);
          PicDetail _elem22;
          for (int _i23 = 0; _i23 < _list21.size; ++_i23)
          {
            _elem22 = new PicDetail();
            _elem22.read(iprot);
            struct.details.add(_elem22);
          }
        }
        struct.setDetailsIsSet(true);
      }
    }
  }

}

